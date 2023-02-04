import { IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const LocaleSelector = () => {
  const {
    locale: currentLocale,
    locales,
    pathname,
    query,
    asPath,
    push,
  } = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleClick}>
        <LanguageIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {locales?.map((locale) => (
          <MenuItem
            key={locale}
            disabled={currentLocale === locale}
            onClick={() => {
              push({ pathname, query }, asPath, { locale });
            }}
          >
            {locale}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
