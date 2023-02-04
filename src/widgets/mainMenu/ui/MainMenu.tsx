import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Divider,
  Drawer,
  DrawerProps,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { NavItem } from './NavItem';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Logo from '@mui/icons-material/LogoDev';
import { useTranslation } from 'next-i18next';

const navItems = [
  {
    href: '/',
    icon: <BackupTableIcon fontSize="small" />,
    title: 'menu.files',
  },
  {
    href: '/favorites',
    icon: <StarOutlineIcon fontSize="small" />,
    title: 'menu.favorites',
  },
];

interface MainMenuProps {
  menuWidth: number;
  open: boolean;
  onClose: () => void;
}

export const MainMenu = ({ menuWidth, open, onClose }: MainMenuProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const lgUp = useMediaQuery<Theme>((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

  const drawerProps: DrawerProps = lgUp
    ? {
        open: true,
        variant: 'permanent',
      }
    : {
        onClose,
        open,
        sx: { zIndex: (theme) => theme.zIndex.appBar + 100 },
        variant: 'temporary',
      };

  return (
    <Drawer
      anchor="left"
      PaperProps={{
        sx: {
          width: menuWidth,
        },
      }}
      {...drawerProps}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', p: 3, gap: 2 }}>
          <NextLink style={{ height: 42 }} href="/">
            <Logo sx={{ height: 42, width: 42 }} />
          </NextLink>
          <Typography variant="h6">Cloud Storage</Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box component="nav">
          {navItems.map(({ title, ...rest }) => (
            <NavItem
              key={title}
              {...rest}
              title={t(title)}
              active={router.pathname === rest.href}
            />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};
