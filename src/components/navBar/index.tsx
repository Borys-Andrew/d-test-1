'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { usePathname } from 'next/navigation';
import { useThemeContext } from '@/theme/themeContext';

type NavBarTypes = {
  onToggleDrawer: () => void;
};

export const NavBar = ({ onToggleDrawer }: NavBarTypes) => {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useThemeContext();

  const getPageTitle = () => {
    if (pathname === '/') return 'Home';
    if (pathname === '/posts') return 'Posts';
    if (pathname === '/posts/create') return 'Create Post';
    if (pathname.startsWith('/posts/')) return 'Post Details'; // Handles /posts/[id]
    return 'News';
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {getPageTitle()}
          </Typography>
          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleTheme}
            color="inherit"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
