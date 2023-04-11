# Install dependencies only when needed
FROM node:18-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci --ignore-scripts --audit false; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG DB_HOST
ENV DB_HOST=$DB_HOST
ARG DB_SCANNER_DATABASE_NAME
ENV DB_SCANNER_DATABASE_NAME=$DB_SCANNER_DATABASE_NAME
ARG DB_LEADERBOARD_DATABASE_NAME
ENV DB_LEADERBOARD_DATABASE_NAME=$DB_LEADERBOARD_DATABASE_NAME
ARG DB_PASSWORD
ENV DB_PASSWORD=$DB_PASSWORD
ARG DB_USER
ENV DB_USER=$DB_USER
ENV NEXT_SHARP_PATH=/app/node_modules/sharp
ENV NEXTAUTH_URL=http://localhost:3000

RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
RUN apk add tree

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN npm install -g concurrently

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

USER nextjs

EXPOSE 3000

ENV PORT 3000

ARG DB_HOST
ENV DB_HOST=$DB_HOST
ARG DB_SCANNER_DATABASE_NAME
ENV DB_SCANNER_DATABASE_NAME=$DB_SCANNER_DATABASE_NAME
ARG DB_LEADERBOARD_DATABASE_NAME
ENV DB_LEADERBOARD_DATABASE_NAME=$DB_LEADERBOARD_DATABASE_NAME
ARG DB_PASSWORD
ENV DB_PASSWORD=$DB_PASSWORD
ARG DB_USER
ENV DB_USER=$DB_USER
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

CMD concurrently --kill-others --names next,back "node server.js" "node --experimental-specifier-resolution=node dist/server/index.js"
