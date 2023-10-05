import { config } from 'node-config-ts';
import { config as configureEnv } from 'dotenv';
import { nextStart } from 'next/dist/cli/next-start.js';
import { getValidatedArgs } from 'next/dist/lib/get-validated-args.js';
import { commandArgs } from 'next/dist/lib/command-args.js';

configureEnv();
nextStart(getValidatedArgs(commandArgs.start(), ['-p', `${config.port || 3000}`]));
