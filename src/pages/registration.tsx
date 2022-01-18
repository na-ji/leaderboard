import Container from '@mui/material/Container';
import Head from 'next/head';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import { useIntl } from 'react-intl';

import { PageTitle } from '@/components/PageTitle';
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
      <PageTitle>{title}</PageTitle>
      <Container maxWidth={false}>
        <Typography variant="h3">{title}</Typography>
        <Registration />
      </Container>
    </>
  );
};

export const getStaticProps = wrapStaticPropsWithLocale(async () => {
  return {
    props: {},
  };
});

export default RegistrationPage;
