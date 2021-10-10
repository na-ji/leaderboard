import { Logger } from 'tslog';

export const logger: Logger = new Logger({
  dateTimePattern: 'year-month-day hour:minute:second',
  dateTimeTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  displayFilePath: 'hidden',
  displayFunctionName: false,
  overwriteConsole: true,
});
