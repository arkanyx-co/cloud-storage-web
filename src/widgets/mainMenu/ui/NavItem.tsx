import NextLink from 'next/link';
import { Box, Button, ListItem } from '@mui/material';
import { ReactNode } from 'react';

interface NavItemProps {
  href: string;
  icon: ReactNode;
  title: string;
  active: boolean;
}

export const NavItem = ({
  href,
  icon,
  title,
  active,
  ...rest
}: NavItemProps) => (
  <ListItem
    disableGutters
    sx={{
      display: 'flex',
      mb: 0.5,
      py: 0,
      px: 2,
    }}
    {...rest}
  >
    <NextLink href={href} passHref legacyBehavior>
      <Button
        component="a"
        startIcon={icon}
        disableRipple
        sx={{
          backgroundColor: active ? 'rgba(255,255,255, 0.08)' : undefined,
          borderRadius: 1,
          color: active ? 'primary.main' : '#D1D5DB',
          fontWeight: active ? 'fontWeightBold' : undefined,
          justifyContent: 'flex-start',
          px: 3,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '& .MuiButton-startIcon': {
            color: active ? 'primary.main' : '#9CA3AF',
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)',
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </NextLink>
  </ListItem>
);
