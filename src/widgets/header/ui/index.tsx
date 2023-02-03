import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { SearchInput } from './SearchInput';
import { Profile } from './Profile';

interface HeaderProps {}

export const Header = (_props: HeaderProps) => {
  const { t } = useTranslation();
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack flex={1} direction="row" justifyContent="space-between">
          <Typography variant="h6">Cloud Storage</Typography>
          <SearchInput />
          {session ? (
            <Profile user={session.user!} />
          ) : (
            <Button variant="contained" onClick={() => signIn('google')}>
              {t('login')}
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
