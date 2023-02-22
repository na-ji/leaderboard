## Pogo Leaderboard

Simple app displaying a leaderboard of Pokémon Go trainers.

### Planned features

- [x] General leaderboard
- [x] Day, week and month leaderboards
- [x] Basic profile page
- [x] Basic discord authentication
- [x] Limit auth to member of guild
- [x] Limit auth to guild member having role
- [ ] Advanced profile page, with charts
- [ ] Registration flow where the player has to tell his trainer name

### Requirements:

- node > 14
- Golbat

### Installation:

```shell
npm ci
cp config/env/config.example config/env/production.json
```

### Configuration:
Then edit the file `config/env/production.json` to put your configuration.

### Discord Auth
* Create a [discord bot](https://discord.com/developers) and fill in the config options below. 
* Only the `clientId` and the `clientSecret` are required. 
* The `botToken` is required if the `guildId` or the `roleId` are filled in. 
* If they are not, the `guildId`/`roleId` should be empty arrays.
* In Discord's Developer portal, the return url to be used is: `https://yourdomain.com/api/auth/callback/discord`
```json
  "enableAuth": true,
  "discord": {
    "clientId": "",
    "clientSecret": "",
    "botToken": "",
    "guildId": [""],
    "roleId": [""]
  },
```

```shell
npm ci
cp config/env/config.example config/env/production.json
```

### Running the application

```shell
npm run build
npm run start
```
### Running in PM2 
From the root of the leaderboard folder.
`pm2 start npm --name "leaderboard" -- start`

### Config file explained

| Configuration                    | Default    | Description                                                                                                                                                                                                                                                                                                                     |
| -------------------------------- | ---------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| port                             | 3000       | Application port                                                                                                                                                                                                                                                                                                                |
| database                         | -          | The configuration to connect to the database. You can save the leaderboard tables from a separate database from your scanner. But the user must have access to both databases.                                                                                                                                                  |
| title                            | Pokémon Go | The title of the application displayed on the header bar                                                                                                                                                                                                                                                                        |
| defaultLocale                    | en         | en, de or fr. This will determine which locale will be accessible on the base path. Other locales will be available on the /{locale} path. The user will be automatically redirected to those paths depending on their browser locale                                                                                           |
| enabledLocales                   | en,fr,de   | Locales to enable                                                                                                                                                                                                                                                                                                               |
| applicationURL                   | -          | Full URL access your app                                                                                                                                                                                                                                                                                                        |
| enableAuth                       | false      | Whether the site is public or not                                                                                                                                                                                                                                                                                               |
| secret                           | -          | Put a random string, needed to secure the authentication                                                                                                                                                                                                                                                                        |
| trainerCode                      | -          | The trainer code of the bot                                                                                                                                                                                                                                                                                                     |
| numberOfTrainerProfileToPrebuild | 30         | The pages are statically rendered on demand, but for the trainer profile to reduce the load you can pre-render them.                                                                                                                                                                                                            |
| discord                          | -          | Discord authentication options. If you want to only check for guild membership, then fill `clientId`, `clientSecret` and `guildId`. If you also want to check role, you need to create a bot and fill `botToken` and `roleId`. `guildId` and `roleId` both accepts an array of ids and the user needs to have only one of them. |
