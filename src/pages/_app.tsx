import Head from 'next/head';
import type { AppProps } from 'next/app';
import { config } from 'node-config-ts';
import { IntlProvider } from 'react-intl';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';
import { Session } from 'next-auth';

import '@/globals.css';
import { fetcher } from '@/utils/fetcher';
import { Auth } from '@/features/auth';
import { Layout } from '@/components/layout';

interface PageProps {
  locale?: string;
  messages?: Record<string, string>;
  session?: Session | null;
}

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps<PageProps>): JSX.Element => {
  return (
    <SessionProvider session={session}>
      <IntlProvider messages={pageProps.messages ?? {}} defaultLocale="en-GB" locale={pageProps.locale ?? 'en-GB'}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <SWRConfig
          value={{
            fetcher,
            refreshInterval: 30 * 60 * 1000,
            revalidateOnMount: true,
            revalidateIfStale: true,
          }}
        >
          <Layout>
            {config.enableAuth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </SWRConfig>
      </IntlProvider>
    </SessionProvider>
  );
};

export default MyApp;
