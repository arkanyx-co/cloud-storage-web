import { Logout } from '@mui/icons-material';
import {
  ListItemIcon,
  Menu,
  MenuItem,
  MenuProps,
  Typography,
} from '@mui/material';
import { signOut } from 'next-auth/react';
import { useTranslation } from 'next-i18next';

interface UserMenuProps extends Pick<MenuProps, 'anchorEl'> {
  onClose: () => void;
}

export const UserMenu = ({ anchorEl, onClose }: UserMenuProps) => {
  const { t } = useTranslation();

  const handleSignOut = () => {
    signOut();
    onClose();
  };

  return (
    <Menu
      sx={{ mt: '50px' }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem onClick={handleSignOut}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <Typography>{t('logout')}</Typography>
      </MenuItem>
    </Menu>
  );
};
