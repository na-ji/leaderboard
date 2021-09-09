import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { SWRConfig } from 'swr';

import { fetcher } from '@/utils/fetcher';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
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
        <Component {...pageProps} />
      </SWRConfig>
    </IntlProvider>
  );
}
export default MyApp;
