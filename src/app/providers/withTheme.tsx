import { usePreferredTheme } from '@/shared/lib/theme/usePreferredTheme';
import { ThemeProvider } from '@mui/material';
import { ComponentType } from 'react';

export const withTheme =
  <P extends {}>(Component: ComponentType<P>) =>
  // eslint-disable-next-line react/display-name
  (props: P) => {
    const theme = usePreferredTheme();

    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };
