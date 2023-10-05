## [7.1.3](https://github.com/na-ji/leaderboard/compare/v7.1.2...v7.1.3) (2023-10-05)


### Bug Fixes

* fix server not starting ([239d1f4](https://github.com/na-ji/leaderboard/commit/239d1f428aabce04f31ec7056fbe6b47881b7308))

## [7.1.2](https://github.com/na-ji/leaderboard/compare/v7.1.1...v7.1.2) (2023-04-20)


### Bug Fixes

* **auth:** check role on every guild the user is member of ([5052795](https://github.com/na-ji/leaderboard/commit/50527959007a14d25ce5b43c0a0ad223d406f52e))

## [7.1.1](https://github.com/na-ji/leaderboard/compare/v7.1.0...v7.1.1) (2023-04-12)


### Bug Fixes

* fix server not starting with ESM modules ([00e0904](https://github.com/na-ji/leaderboard/commit/00e090433492c05ff5a27131c22adc0d55db9621))

# [7.1.0](https://github.com/na-ji/leaderboard/compare/v7.0.0...v7.1.0) (2023-04-04)


### Bug Fixes

* **profile:** fix last seen displaying wrong time ([06b9a5e](https://github.com/na-ji/leaderboard/commit/06b9a5e96e82cf7c87229669e9683ea9d8196113))


### Features

* **profile:** add tooltip to last seen displaying full datetime ([3c8ffcc](https://github.com/na-ji/leaderboard/commit/3c8ffccb51f01e7c6189cb1d0fd3d07c1ae6327c))
* **profile:** display badge icon depending on tier ([d34954f](https://github.com/na-ji/leaderboard/commit/d34954f4d3a56ca5e2f1e4d5fffa7e941fab8e5d)), closes [#489](https://github.com/na-ji/leaderboard/issues/489)

# [7.0.0](https://github.com/na-ji/leaderboard/compare/v6.0.6...v7.0.0) (2023-03-21)


### Features

* add support for friend code scanning ([745b8bf](https://github.com/na-ji/leaderboard/commit/745b8bf2ae23512e1268c28ea56cf64e4bf62921))
* fetch profile page depending on trainer name instead of friendship id ([d18512b](https://github.com/na-ji/leaderboard/commit/d18512b6a883f772717ab5b9c574d3a24c65f0ad)), closes [#488](https://github.com/na-ji/leaderboard/issues/488)


### BREAKING CHANGES

* Player profile URL now uses trainer name instead of friendship ID.
You will get a 404 page not found on previous URLs.

## [6.0.6](https://github.com/na-ji/leaderboard/compare/v6.0.5...v6.0.6) (2023-03-10)


### Bug Fixes

* prevent build from crashing when GO battle league is over ([ac2e580](https://github.com/na-ji/leaderboard/commit/ac2e5804a8a89a00f844f12cab55849657e85758))

## [6.0.5](https://github.com/na-ji/leaderboard/compare/v6.0.4...v6.0.5) (2023-02-22)


### Bug Fixes

* **auth:** properly log errors when using discord API ([27381b3](https://github.com/na-ji/leaderboard/commit/27381b3199c52214d59c7d5cca0385770a723de1))

## [6.0.4](https://github.com/na-ji/leaderboard/compare/v6.0.3...v6.0.4) (2023-02-17)


### Bug Fixes

* **period-leaderboard:** fix progression defaulting to 0 when a value is new ([54d36cf](https://github.com/na-ji/leaderboard/commit/54d36cf23b797f415690e1f409accaf1cb8048ff))

## [6.0.3](https://github.com/na-ji/leaderboard/compare/v6.0.2...v6.0.3) (2023-02-17)


### Bug Fixes

* **config:** set default role id to empty array ([a76ac33](https://github.com/na-ji/leaderboard/commit/a76ac33c7b5ad32e7d4eee38304239bfcbff8766))
* **discord-auth:** check if config is correct before taking decision on providing access ([8331275](https://github.com/na-ji/leaderboard/commit/8331275eb3ce291c834f146f582c5cb9aac19db7))
* **period-leaderboard:** fix missing columns when computing progression ([395a155](https://github.com/na-ji/leaderboard/commit/395a155476b9537e83668cea4ab29d6436d4543c))

## [6.0.2](https://github.com/na-ji/leaderboard/compare/v6.0.1...v6.0.2) (2023-02-13)


### Bug Fixes

* correctly set PORT before starting nextjs server ([fa9cb22](https://github.com/na-ji/leaderboard/commit/fa9cb22dd524a16919b70b8c23fc18c669af3b82))

## [6.0.1](https://github.com/na-ji/leaderboard/compare/v6.0.0...v6.0.1) (2023-02-13)


### Bug Fixes

* **periodleaderboard:** fix period query breaking because of negative results ([d1f6634](https://github.com/na-ji/leaderboard/commit/d1f663419716d72c55c1d27bfe578ac566f8102c))

# [6.0.0](https://github.com/na-ji/leaderboard/compare/v5.5.1...v6.0.0) (2023-02-13)


### Features

* add four new badges ([f1f1cc2](https://github.com/na-ji/leaderboard/commit/f1f1cc281a583a28e9325b2393fd0d158e50b4ed))
* migrate to Golbat backend ([26c3cf0](https://github.com/na-ji/leaderboard/commit/26c3cf07221573b82744321e0c8706c305fa71b0))


### BREAKING CHANGES

* The schema is now based on Golbat backend. See the migration guide in
`MIGRATION.md`.

## [5.5.1](https://github.com/v-mapper/leaderboard/compare/v5.5.0...v5.5.1) (2022-05-02)

### Bug Fixes

- **leaderboard:** fix split row hover on desktop ([33ff600](https://github.com/v-mapper/leaderboard/commit/33ff600d00b02176ab65dd0c05c3c11667cd3be6))

# [5.5.0](https://github.com/v-mapper/leaderboard/compare/v5.4.0...v5.5.0) (2022-05-02)

### Features

- **config:** add `title` option to configure header content ([81cf698](https://github.com/v-mapper/leaderboard/commit/81cf6986f689204d80be529a2c765c7ed766725a))
- **leaderboard:** add global stats cards ([d15a628](https://github.com/v-mapper/leaderboard/commit/d15a628a68dbf978237b233f6544e486f5c826c3))

# Release notes

# [5.4.0](https://github.com/v-mapper/leaderboard/compare/v5.3.1...v5.4.0) (2022-05-01)

### Bug Fixes

- **leaderboard:** fix cropped table header labels ([8067311](https://github.com/v-mapper/leaderboard/commit/8067311b4396f628495d8fce3076f296785c8f08))
- **profile:** add missing unique pokestops badge asset ([f136762](https://github.com/v-mapper/leaderboard/commit/f1367627dcf9e30b12c6157e44828e3c0a334563))

### Features

- translate everything to German (thanks AcoVanConis) ([854e70e](https://github.com/v-mapper/leaderboard/commit/854e70e1dc80eb0fc2d084e5d288a463685bfbc8))

## [5.3.1](https://github.com/v-mapper/leaderboard/compare/v5.3.0...v5.3.1) (2022-05-01)

### Bug Fixes

- **profile:** fix xp progression not translated correctly ([f62e091](https://github.com/v-mapper/leaderboard/commit/f62e09193fe9ea41294fd8162dd1931a5ce61165))

# [5.3.0](https://github.com/v-mapper/leaderboard/compare/v5.2.0...v5.3.0) (2022-05-01)

### Bug Fixes

- **profile:** fix xp bar overflowing on mobile ([864c3fd](https://github.com/v-mapper/leaderboard/commit/864c3fd88e9c78e09e027573460c1989a6730042))

### Features

- **config:** add option to enable/disable locales ([5693108](https://github.com/v-mapper/leaderboard/commit/5693108a1d81463f99652c0824768b2b18fef4b8))

# [5.2.0](https://github.com/v-mapper/leaderboard/compare/v5.1.0...v5.2.0) (2022-05-01)

### Bug Fixes

- **leaderboard:** fix period select not appearing correctly on mobile ([96031d0](https://github.com/v-mapper/leaderboard/commit/96031d0723212e6c36c46168be0041638eee836b))

### Features

- add german support (not translated yet) ([9c5ae2e](https://github.com/v-mapper/leaderboard/commit/9c5ae2ed777cb157e820b763dcb0c26ea0f25ce3))
- **profile:** compute XP bar ([5ed6cbe](https://github.com/v-mapper/leaderboard/commit/5ed6cbe5b758e489bbab5a5de2fdfac7788c059c))

# [5.1.0](https://github.com/v-mapper/leaderboard/compare/v5.0.0...v5.1.0) (2022-04-30)

### Bug Fixes

- **auth:** disable Discord provider when auth is disabled ([8a7bab7](https://github.com/v-mapper/leaderboard/commit/8a7bab7d48c91fb6c5bd735033f4b946a555354e))
- **leaderboard:** fix period select not working all the time ([b6c94a8](https://github.com/v-mapper/leaderboard/commit/b6c94a8b74a6d139af6b00e3e859a6fc0d792817))
- **profile:** fix page loading with empty trainer ([02964eb](https://github.com/v-mapper/leaderboard/commit/02964ebec5813c216d1e6a2f28e8d1b554d74765))
- try to fix vercel not importing config files ([9bac695](https://github.com/v-mapper/leaderboard/commit/9bac6953335cd60aeab56ebc224b529ddbcdbb0c))

### Features

- **leaderboard:** add desktop period selector ([7dc7dc3](https://github.com/v-mapper/leaderboard/commit/7dc7dc3533f71a31ce7da26743d69375ce41409c))
- **leaderboard:** add mobile period selector ([3bb1b5d](https://github.com/v-mapper/leaderboard/commit/3bb1b5d847c720381f3a3986c07c5a4d240059a0))
- redesign whole app ([d32f5a1](https://github.com/v-mapper/leaderboard/commit/d32f5a1c4c19a6743559fb080ec7ecd90aec2afa))

# [5.0.0](https://github.com/v-mapper/leaderboard/compare/v4.5.5...v5.0.0) (2022-04-12)

### Bug Fixes

- **auth:** do not create schema if auth is disabled ([9cb8f8c](https://github.com/v-mapper/leaderboard/commit/9cb8f8cf3b19f0041822d22ca58ed17e174d448b))

### Features

- **discord-auth:** accept multiple roles or guilds ([852cbc3](https://github.com/v-mapper/leaderboard/commit/852cbc3aad85df176edc2f2267469cc9384c1958))
- **registration:** create registration page ([e44da84](https://github.com/v-mapper/leaderboard/commit/e44da841bdd198a7d6213a5dbd9db5a1f1a6b2ab))

### BREAKING CHANGES

- **discord-auth:** Now the `roleId` and `guildId` options accepts an array of IDs

## [4.5.5](https://github.com/v-mapper/leaderboard/compare/v4.5.4...v4.5.5) (2022-01-10)

### Performance Improvements

- **database:** add indexes to make queries instant ([a0de3f2](https://github.com/v-mapper/leaderboard/commit/a0de3f2e823e4a7953211d11c2205bbf5524f2dd))

## [4.5.4](https://github.com/v-mapper/leaderboard/compare/v4.5.3...v4.5.4) (2022-01-10)

### Performance Improvements

- **periodleaderboard:** reduce number of query when building page ([3d60492](https://github.com/v-mapper/leaderboard/commit/3d60492885faaae80fcfcd9d6e2802a02db2f003))

## [4.5.3](https://github.com/v-mapper/leaderboard/compare/v4.5.2...v4.5.3) (2022-01-09)

### Bug Fixes

- **database:** fix schema creation script not having correct conf ([12d392b](https://github.com/v-mapper/leaderboard/commit/12d392b1a616bd42b8c446c02c4285170330c6b5))

## [4.5.2](https://github.com/v-mapper/leaderboard/compare/v4.5.1...v4.5.2) (2021-12-14)

### Bug Fixes

- **database:** fix first build failing when database is not set up yet ([05f8aa7](https://github.com/v-mapper/leaderboard/commit/05f8aa7ec98d4d9400b4678c7dc05965a75a2022))

## [4.5.1](https://github.com/v-mapper/leaderboard/compare/v4.5.0...v4.5.1) (2021-12-05)

### Bug Fixes

- fix auth not configured correctly ([80bb7fa](https://github.com/v-mapper/leaderboard/commit/80bb7fa7785d674329611b6a5c8b8853e7f16fa6))

# [4.5.0](https://github.com/v-mapper/leaderboard/compare/v4.4.4...v4.5.0) (2021-10-15)

### Bug Fixes

- **leaderboard:** fix sorting being reset when data is updating ([082afc5](https://github.com/v-mapper/leaderboard/commit/082afc50e07ada8cc21a5472b68265bb70dd3ffe))

### Features

- **leaderboard:** add new columns to general leaderboard ([a39e0ec](https://github.com/v-mapper/leaderboard/commit/a39e0ece320b6bfd37c3404df48d316b2d0f57ab))
- **leaderboard:** add new miscellaneous table ([1787c42](https://github.com/v-mapper/leaderboard/commit/1787c425ca7926eeac0e9fa4d3f4439d904e57df))
- **leaderboard:** disable dragging of columns ([042909a](https://github.com/v-mapper/leaderboard/commit/042909adc09f46036de5a75949a49cdb45d112a4))

## [4.4.4](https://github.com/v-mapper/leaderboard/compare/v4.4.3...v4.4.4) (2021-10-10)

### Bug Fixes

- display log timestamp in server timezone ([4cc8bdb](https://github.com/v-mapper/leaderboard/commit/4cc8bdbb04bb4c61303f7fa31f1a4c5aeee4e2f6))

## [4.4.3](https://github.com/v-mapper/leaderboard/compare/v4.4.2...v4.4.3) (2021-10-10)

### Bug Fixes

- fix cron not executing at correct hour ([9babce0](https://github.com/v-mapper/leaderboard/commit/9babce02864d120be737982d53f588619bbb9269))

## [4.4.2](https://github.com/v-mapper/leaderboard/compare/v4.4.1...v4.4.2) (2021-10-10)

### Bug Fixes

- remove x-powered-by header ([57c05a5](https://github.com/v-mapper/leaderboard/commit/57c05a5d9e6f51add94f2ac0c2b2cbc3e3923fe6))

## [4.4.1](https://github.com/v-mapper/leaderboard/compare/v4.4.0...v4.4.1) (2021-10-10)

### Bug Fixes

- force every pages to revalidate ([d71b6d5](https://github.com/v-mapper/leaderboard/commit/d71b6d52240f8090d5355e81e5c841b1e3fdbdbb))

### Performance Improvements

- reduce number of queries when fetching period leaderboard ([a08263c](https://github.com/v-mapper/leaderboard/commit/a08263cee9afabe7bb31991e507069d1d2877e92))

# [4.4.0](https://github.com/v-mapper/leaderboard/compare/v4.3.0...v4.4.0) (2021-10-10)

### Features

- **leaderboard:** increase table height ([6f36f1e](https://github.com/v-mapper/leaderboard/commit/6f36f1e930c748c78c2a2888ff528184b1757da0))

# [4.3.0](https://github.com/v-mapper/leaderboard/compare/v4.2.0...v4.3.0) (2021-10-09)

### Bug Fixes

- fix leaderboard table not creating when using different db ([f9b52aa](https://github.com/v-mapper/leaderboard/commit/f9b52aab4f5c06c2d5d2dff3d113ba9220228cc5))

### Features

- **period-leaderboard:** compute leaderboard with minimum data ([0224b66](https://github.com/v-mapper/leaderboard/commit/0224b6622510c31d06d59b07d836139d1383ef73))

# [4.2.0](https://github.com/v-mapper/leaderboard/compare/v4.1.0...v4.2.0) (2021-09-27)

### Features

- **auth:** log when someone try to login ([eae78bc](https://github.com/v-mapper/leaderboard/commit/eae78bc7ae5d4bb73c5aeaeb692ce2034246cb4f))
- **leaderboard:** add total column in collection leaderboard ([09dca96](https://github.com/v-mapper/leaderboard/commit/09dca962db6d7b6ba536cff5874eda8e8b33cc78))

# [4.1.0](https://github.com/v-mapper/leaderboard/compare/v4.0.0...v4.1.0) (2021-09-26)

### Features

- **auth:** check discord guild membership and role ([01b733c](https://github.com/v-mapper/leaderboard/commit/01b733c0e63f612f19a75fd8601399465c39b1bf))

# [4.0.0](https://github.com/v-mapper/leaderboard/compare/v3.5.0...v4.0.0) (2021-09-26)

### Features

- rename leaderboard table ([66fdb3b](https://github.com/v-mapper/leaderboard/commit/66fdb3b643adbe5f722e3d6ed2f31b0c007bc014))

### BREAKING CHANGES

- the `trainer_data` table is now named `pogo_leaderboard_trainer_history`

# [3.5.0](https://github.com/v-mapper/leaderboard/compare/v3.4.0...v3.5.0) (2021-09-26)

### Features

- add a pretty print logger ([2869714](https://github.com/v-mapper/leaderboard/commit/2869714b9e99241f9f7e5ef46c6c9a448d4bff24))
- add port configuration ([a4a120e](https://github.com/v-mapper/leaderboard/commit/a4a120e6435534cc2722fcb83fec5116d3516827))
- automate schema creation ([f1fbf92](https://github.com/v-mapper/leaderboard/commit/f1fbf924f0b78a4f94c85527e161c6533bd6f785))
- automatically update trainer history when running app ([d205915](https://github.com/v-mapper/leaderboard/commit/d20591517854836832c9b0c3ca3351d291ff2cd2))

# [3.4.0](https://github.com/v-mapper/leaderboard/compare/v3.3.2...v3.4.0) (2021-09-25)

### Features

- reduce horizontal padding ([a277390](https://github.com/v-mapper/leaderboard/commit/a277390f8276e2d7c16df7d73190a890d686d1a0))

## [3.3.2](https://github.com/v-mapper/leaderboard/compare/v3.3.1...v3.3.2) (2021-09-25)

### Performance Improvements

- **leaderboard:** reduce size of ag-grid bundle ([a2876da](https://github.com/v-mapper/leaderboard/commit/a2876dad2d92731b8637979cc9db753b21b99f3a))
- **period-leaderboard:** reduce size of payload ([9525fa6](https://github.com/v-mapper/leaderboard/commit/9525fa624a474b771b1a4a3ba2c35abc9148723a))

## [3.3.1](https://github.com/v-mapper/leaderboard/compare/v3.3.0...v3.3.1) (2021-09-25)

### Performance Improvements

- **leaderboard:** replace mui-grid by ag-grid ([140498a](https://github.com/v-mapper/leaderboard/commit/140498a091fce9b8d69174f9264b6b694ac5ae26))

# [3.3.0](https://github.com/v-mapper/leaderboard/compare/v3.2.0...v3.3.0) (2021-09-25)

### Features

- **leaderboard:** move leaderboards to different tabs ([4e45f3d](https://github.com/v-mapper/leaderboard/commit/4e45f3d9f53cdaeffb3d173b1a25a8c50e942475))

# [3.2.0](https://github.com/v-mapper/leaderboard/compare/v3.1.0...v3.2.0) (2021-09-25)

### Bug Fixes

- **profile:** fix api calls failing when profile contained / ([b66cfd3](https://github.com/v-mapper/leaderboard/commit/b66cfd33f70e7876ad3b6b19ebd0f5448847f329))

### Features

- refresh pages every 30 minutes ([038c6bb](https://github.com/v-mapper/leaderboard/commit/038c6bb8dd2ab7ffdc3e504f3810deb822dc95ce))

# [3.1.0](https://github.com/v-mapper/leaderboard/compare/v3.0.1...v3.1.0) (2021-09-20)

### Features

- **leaderboard:** add pagination ([a4e480f](https://github.com/v-mapper/leaderboard/commit/a4e480fc0d05e2a061bd5843b8f5353e1c08a2b0))

## [3.0.1](https://github.com/v-mapper/leaderboard/compare/v3.0.0...v3.0.1) (2021-09-20)

### Bug Fixes

- **leaderboard:** prevent preloading multiple times the same profile ([b68178e](https://github.com/v-mapper/leaderboard/commit/b68178e767c3db06440746861e28e9700688f064))

# [3.0.0](https://github.com/v-mapper/leaderboard/compare/v2.1.0...v3.0.0) (2021-09-19)

### Features

- merge the two databases config ([1f50ec0](https://github.com/v-mapper/leaderboard/commit/1f50ec0ad1e9eb285f6711d282bc83f257cc0709))

### BREAKING CHANGES

- The two database config are now merged into a single `database` config. It's still
  possible to separate leaderboard and Scanner's table into two databases.

# [2.1.0](https://github.com/v-mapper/leaderboard/compare/v2.0.0...v2.1.0) (2021-09-19)

### Features

- add configuration to number of profile pages to pre-render ([9ba7341](https://github.com/v-mapper/leaderboard/commit/9ba7341bc9d047fc3e999d855b6821a0f2b312ca))

# [2.0.0](https://github.com/v-mapper/leaderboard/compare/v1.10.0...v2.0.0) (2021-09-19)

### Features

- allow to use a separate database for leaderboard ([d7901dd](https://github.com/v-mapper/leaderboard/commit/d7901dd7b12a409aaa59c8d48c2881b2370d9f54))
- **layout:** translate logout button ([a1c8c49](https://github.com/v-mapper/leaderboard/commit/a1c8c49f20cfd047e1968502091fd3c02d96be27))

### BREAKING CHANGES

- The database configuration was splitted into with a different name

# [1.10.0](https://github.com/v-mapper/leaderboard/compare/v1.9.1...v1.10.0) (2021-09-18)

### Features

- add possibility to configure database port ([305ec1c](https://github.com/v-mapper/leaderboard/commit/305ec1c32e61b148fb70bb69dca183f437233223))
- **auth:** save user in database ([4f17006](https://github.com/v-mapper/leaderboard/commit/4f170069af463509dc83fa14a1ebd4bcc958fa71))

## [1.9.1](https://github.com/v-mapper/leaderboard/compare/v1.9.0...v1.9.1) (2021-09-18)

### Bug Fixes

- **leaderboard:** fix layout shift when navigating between pages ([9c82825](https://github.com/v-mapper/leaderboard/commit/9c82825195de1ddc33ee0b6ac48ac78b06da5590))

# [1.9.0](https://github.com/v-mapper/leaderboard/compare/v1.8.0...v1.9.0) (2021-09-18)

### Features

- **auth:** guard api route behind auth ([acb7a85](https://github.com/v-mapper/leaderboard/commit/acb7a858376733173174955de512779be0aa9305))

# [1.8.0](https://github.com/v-mapper/leaderboard/compare/v1.7.0...v1.8.0) (2021-09-18)

### Features

- **leaderboard:** add period leaderboard ([c06a3fb](https://github.com/v-mapper/leaderboard/commit/c06a3fb0ec625aadfdeade5ca33cec549f1a1acf))

# [1.7.0](https://github.com/v-mapper/leaderboard/compare/v1.6.0...v1.7.0) (2021-09-12)

### Features

- add drawer menu for navigation ([d436850](https://github.com/v-mapper/leaderboard/commit/d436850abd24f514e45881c692f81555a299fa99))

# [1.6.0](https://github.com/v-mapper/leaderboard/compare/v1.5.0...v1.6.0) (2021-09-12)

### Features

- **auth:** add basic discord auth ([aa7cc55](https://github.com/v-mapper/leaderboard/commit/aa7cc557794199c181ced9a33640590b07f86bd4))

# [1.5.0](https://github.com/v-mapper/leaderboard/compare/v1.4.0...v1.5.0) (2021-09-12)

### Features

- **leaderboard:** translate new leaderboards in french ([42a1f54](https://github.com/v-mapper/leaderboard/commit/42a1f546f6e26d0c3197fe50f91114a9b630fd19))
- re-use database connections instead of creating new ones ([bd271b2](https://github.com/v-mapper/leaderboard/commit/bd271b22fdcfbce28bcb1da0a9c212cff0e7f005))

# [1.4.0](https://github.com/v-mapper/leaderboard/compare/v1.3.1...v1.4.0) (2021-09-11)

### Features

- **leaderboard:** add new leaderboards ([d7fc4b6](https://github.com/v-mapper/leaderboard/commit/d7fc4b6178afe3adb332b13cf7ddefe6f9bd8bcf))

## [1.3.1](https://github.com/v-mapper/leaderboard/compare/v1.3.0...v1.3.1) (2021-09-11)

### Bug Fixes

- **leaderboard:** prevent infinite rerendering of leaderboard ([7466ad4](https://github.com/v-mapper/leaderboard/commit/7466ad4c411469accf48b4b6f03b7c4e7df4c818))

# [1.3.0](https://github.com/v-mapper/leaderboard/compare/v1.2.0...v1.3.0) (2021-09-09)

### Features

- revalidate data when loading page ([9ea801c](https://github.com/v-mapper/leaderboard/commit/9ea801c90c6a82027b4243c4d64465a1c635a98f))

# [1.2.0](https://github.com/v-mapper/leaderboard/compare/v1.1.0...v1.2.0) (2021-09-05)

### Features

- **profile:** prebuild page for every locale ([78ae734](https://github.com/v-mapper/leaderboard/commit/78ae734c23f25da7946cb6269ea877451cd40f3e))

# [1.1.0](https://github.com/v-mapper/leaderboard/compare/v1.0.0...v1.1.0) (2021-09-05)

### Features

- add ability to configure default locale ([abb04fb](https://github.com/v-mapper/leaderboard/commit/abb04fb54c8f249f8ef74c6c18611b87996cb8c4))

# [1.0.0](https://github.com/v-mapper/leaderboard/compare/9268fb56a90cc12edcdd9772caaf7029d96a30fa...v1.0.0) (2021-09-05)

### Bug Fixes

- fix styled components warnings ([359a26b](https://github.com/v-mapper/leaderboard/commit/359a26bc282632632759542266a3bd370c7b4ffd))
- **leaderboard:** add minimum column width for mobile ([b5769cd](https://github.com/v-mapper/leaderboard/commit/b5769cddfe452559efab751c198f43a689854e0e))
- **leaderboard:** fix title disappearing on hydration ([5d504be](https://github.com/v-mapper/leaderboard/commit/5d504beed09dbf3b526aa951f8dad73d5251b79f))
- **profile:** fix profile not loading ([cb3e68c](https://github.com/v-mapper/leaderboard/commit/cb3e68c55cf574f55a8f0207f081e889a0450dec))

### Features

- add fitting meta description ([55cb2da](https://github.com/v-mapper/leaderboard/commit/55cb2da5616334308d33aba857b521e26016b5c2))
- add i18n support ([d790d07](https://github.com/v-mapper/leaderboard/commit/d790d07b47a62b94273c2d058616e33ca415b643))
- add leaderboard page ([9268fb5](https://github.com/v-mapper/leaderboard/commit/9268fb56a90cc12edcdd9772caaf7029d96a30fa))
- add profile page ([5655246](https://github.com/v-mapper/leaderboard/commit/565524696f3acfa1c799280c3dfa48307e715b24))
- **leaderboard:** add column header translations ([912de7c](https://github.com/v-mapper/leaderboard/commit/912de7cbbfca08a733eb9172f529aa8847b1de4b))
- **leaderboard:** indicate that each rows are clickable ([ead7562](https://github.com/v-mapper/leaderboard/commit/ead7562fa99830e7ce82acc56813aa85fa824aec))
- **leaderboard:** load datagrid locale ([c76059d](https://github.com/v-mapper/leaderboard/commit/c76059db20ee922ba0d5be3402572a517b23617c))
- **leaderboard:** set default sorting order ([d2c7ec5](https://github.com/v-mapper/leaderboard/commit/d2c7ec5c17b80847a4151cbb82382ecac46e16bc))
- **profile:** add medals translations ([a998e61](https://github.com/v-mapper/leaderboard/commit/a998e619f34beb8c38a32b4f582538a0995611b0))
- **profile:** add profile page translations ([5b2743f](https://github.com/v-mapper/leaderboard/commit/5b2743f863e04b444f8416fc7161efaecbef428a))
- rebuild index and profile page every 30 minutes ([cc8e53d](https://github.com/v-mapper/leaderboard/commit/cc8e53d003bf2dd730ac8a86f0b851566efa02e6))

### Performance Improvements

- **profile:** prefetch profile page ([ca12a71](https://github.com/v-mapper/leaderboard/commit/ca12a71cca09769f4b944cb7e1320e6cb7d7eeed))
