import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider messages={pageProps.messages ?? {}} defaultLocale="en-GB" locale={pageProps.locale ?? 'en-GB'}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </IntlProvider>
  );
}
export default MyApp;
