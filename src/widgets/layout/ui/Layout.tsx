import { Header } from '@/widgets/header';
import { MainMenu } from '@/widgets/mainMenu';
import { PropsWithChildren, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const menuWidth = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: menuWidth,
  },
}));

interface LayoutProps {}

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <Header menuWidth={menuWidth} onMenuOpen={() => setIsMenuOpen(true)} />
      <LayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </LayoutRoot>
      <MainMenu
        menuWidth={menuWidth}
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};
