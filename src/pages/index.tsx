import { Box, Container, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { setAuthToken } from '@/shared/api/base';
import { file } from '@/shared/api';
import { getToken } from 'next-auth/jwt';

interface IndexProps {
  files: unknown[];
}

const Index = (_props: IndexProps) => {
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

export const getServerSideProps: GetServerSideProps<IndexProps> = async ({
  req,
  locale,
}) => {
  const token = await getToken({ req });
  setAuthToken(token?.accessToken!);
  const { data: files } = await file.getFiles();
  return {
    props: {
      files,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  };
};

export default Index;
