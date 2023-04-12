import { config } from 'node-config-ts';
import { config as configureEnv } from 'dotenv';
import cli from 'next/dist/cli/next-start.js';

configureEnv();
cli.nextStart(['-p', `${config.port || 3000}`]);
