import { Avatar, IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { UserMenu } from './UserMenu';

interface ProfileProps {
  user: {
    name?: string | null;
    image?: string | null;
  };
}

export const Profile = ({ user }: ProfileProps) => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <>
      <Tooltip title={user?.name}>
        <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
          <Avatar src={user?.image ?? ''} />
        </IconButton>
      </Tooltip>
      <UserMenu anchorEl={anchorElUser} onClose={handleCloseUserMenu} />
    </>
  );
};
