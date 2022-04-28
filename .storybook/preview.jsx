import * as jest from 'jest-mock';
import { IntlProvider } from 'react-intl';

import '../src/globals.css';

window.jest = jest;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'blue-10',
    values: [
      {
        name: 'blue-10',
        value: '#F7F9FD',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <IntlProvider locale="en" defaultLocale="en" messages={{}}>
      <Story />
    </IntlProvider>
  ),
];
