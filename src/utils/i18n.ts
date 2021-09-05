import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface I18nProps {
  locale?: string;
  messages: Record<
    string,
    Array<{
      type: number;
      value: string;
    }>
  >;
}

export const wrapStaticPropsWithLocale =
  <Props extends { [key: string]: any } = { [key: string]: any }, Query extends ParsedUrlQuery = ParsedUrlQuery>(
    pageGetStaticProps: GetStaticProps<Props, Query>,
  ): GetStaticProps<Props & I18nProps, Query> =>
  async (context) => {
    const pageStaticProps = await pageGetStaticProps(context);

    if ('notFound' in pageStaticProps || 'redirect' in pageStaticProps) {
      return pageStaticProps;
    }

    const { locale } = context;
    const [simpleLocale] = locale ? locale.split('-') : ['en'];
    const messages = (await import(`@/i18n/compiled-lang/${simpleLocale}.json`)).default as I18nProps['messages'];

    return {
      ...pageStaticProps,
      props: { ...(pageStaticProps.props ?? {}), locale, messages },
    };
  };
