## Pogo Leaderboard

Simple app displaying a leaderboard of Pokémon Go trainers.

### Planned features

- [x] General leaderboard
- [x] Day, week and month leaderboards
- [x] Basic profile page
- [x] Basic discord authentication
- [ ] Advanced profile page, with charts
- [ ] Registration flow where the player has to tell his trainer name
- [ ] Limit auth to member of guild
- [ ] Limit auth to guild member having role

### Requirements

- node > 14
- modded MAD

## Installation

```shell
npm ci
cp config/default.json config/env/production.json
```

Then edit the file `config/env/production.json` to put your configuration.

## Running the application

```shell
npm run build
npm run start
```

## Configuration

| Configuration                    | Default | Description                                                                                                                                                                                                                       |
| -------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| port                             | 3000    | Application port                                                                                                                                                                                                                  |
| database                         | -       | The configuration to connect to the database. You can save the leaderboard tables from a separate database from MAD. But the user must have access to both databases.                                                             |
| defaultLocale                    | en      | en or fr. This will determine which locale will be accessible on the base path. Other locales will be available on the /{locale} path. The user will be automatically redirected to those paths depending on their browser locale |
| applicationURL                   | -       | Full URL access your app                                                                                                                                                                                                          |
| enableAuth                       | false   | Whether the site is public or not                                                                                                                                                                                                 |
| secret                           | -       | Put a random string, needed to secure the authentication                                                                                                                                                                          |
| trainerCode                      | -       | The trainer code of the bot                                                                                                                                                                                                       |
| discord                          | -       | Discord Client ID and Client Secret to run the authentication. Mandatory if auth is enabled                                                                                                                                       |
| numberOfTrainerProfileToPrebuild | 50      | The pages are statically rendered, but for the trainer profile to reduce the load you can pre-render them.                                                                                                                        |
