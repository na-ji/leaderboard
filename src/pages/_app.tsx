import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { config } from 'node-config-ts';
import { IntlProvider } from 'react-intl';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';

import { fetcher } from '@/utils/fetcher';
import { Auth } from '@/features/auth';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element => {
  return (
    <SessionProvider session={session}>
      <IntlProvider messages={pageProps.messages ?? {}} defaultLocale="en-GB" locale={pageProps.locale ?? 'en-GB'}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher,
            refreshInterval: 30000,
          }}
        >
          {config.enableAuth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SWRConfig>
      </IntlProvider>
    </SessionProvider>
  );
};

export default MyApp;
