import { config } from 'node-config-ts';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config(); // require dotenv
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cli = require('next/dist/cli/next-start');

cli.nextStart(['-p', `${config.port || 3000}`]);
