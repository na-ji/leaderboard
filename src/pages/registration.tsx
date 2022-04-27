import Head from 'next/head';
import type { NextPage } from 'next';
import { useIntl } from 'react-intl';

import { Registration } from '@/features/auth';
import { wrapStaticPropsWithLocale } from '@/utils/i18n';

const RegistrationPage: NextPage = () => {
  const intl = useIntl();
  const description = intl.formatMessage({
    id: 'registration.description',
    defaultMessage: 'Pokémon Go Leaderboard registration',
    description: 'Registration page meta description',
  });
  const title = intl.formatMessage({
    id: 'registration.title',
    defaultMessage: 'Registration',
    description: 'Registration page title',
  });

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
      </Head>
      <h1 className="title-1 mt-2.5 lg:mt-0.5">{title}</h1>
      <Registration />
    </>
  );
};

export const getStaticProps = wrapStaticPropsWithLocale(async () => {
  return {
    props: {},
  };
});

export default RegistrationPage;
