import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSession, signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { SearchInput } from './SearchInput';
import { Profile } from './Profile';
import { LocaleSelector } from './LocaleSelector';

interface HeaderProps {
  menuWidth: number;
  onMenuOpen: () => void;
}

export const Header = ({ menuWidth, onMenuOpen }: HeaderProps) => {
  const { t } = useTranslation();
  const { data: session } = useSession();

  return (
    <AppBar
      position="static"
      sx={{
        width: { lg: `calc(100% - ${menuWidth}px)` },
        ml: { lg: `${menuWidth}px` },
      }}
    >
      <Toolbar>
        <Stack flex={1} direction="row" justifyContent="space-between">
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuOpen}
            sx={{ display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <SearchInput />
          <Stack direction="row" gap={1}>
            <LocaleSelector />
            {session ? (
              <Profile user={session.user!} />
            ) : (
              <Button variant="contained" onClick={() => signIn('google')}>
                {t('login')}
              </Button>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
