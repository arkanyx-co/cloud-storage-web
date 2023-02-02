import { Box, Container, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface IndexProps {}

const Index = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {t('a')}
        </Typography>
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<IndexProps> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});

export default Index;
