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

### Requirements

- node > 14
- modded MAD

## Installation

```shell
npm ci
cp config/env/config.example config/env/production.json
```

Then edit the file `config/env/production.json` to put your configuration.

## Running the application

```shell
npm run build
npm run start
```

## Configuration

| Configuration                    | Default | Description                                                                                                                                                                                                                                                                                                                     |
| -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| port                             | 3000    | Application port                                                                                                                                                                                                                                                                                                                |
| database                         | -       | The configuration to connect to the database. You can save the leaderboard tables from a separate database from MAD. But the user must have access to both databases.                                                                                                                                                           |
| defaultLocale                    | en      | en, de or fr. This will determine which locale will be accessible on the base path. Other locales will be available on the /{locale} path. The user will be automatically redirected to those paths depending on their browser locale                                                                                           |
| applicationURL                   | -       | Full URL access your app                                                                                                                                                                                                                                                                                                        |
| enableAuth                       | false   | Whether the site is public or not                                                                                                                                                                                                                                                                                               |
| secret                           | -       | Put a random string, needed to secure the authentication                                                                                                                                                                                                                                                                        |
| trainerCode                      | -       | The trainer code of the bot                                                                                                                                                                                                                                                                                                     |
| numberOfTrainerProfileToPrebuild | 50      | The pages are statically rendered on demand, but for the trainer profile to reduce the load you can pre-render them.                                                                                                                                                                                                            |
| discord                          | -       | Discord authentication options. If you want to only check for guild membership, then fill `clientId`, `clientSecret` and `guildId`. If you also want to check role, you need to create a bot and fill `botToken` and `roleId`. `guildId` and `roleId` both accepts an array of ids and the user needs to have only one of them. |
