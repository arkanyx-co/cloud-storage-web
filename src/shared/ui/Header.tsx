import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import { SearchInput } from './SearchInput';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack flex={1} direction="row" justifyContent="space-between">
          <Typography variant="h6">Cloud Storage</Typography>
          <SearchInput />
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
