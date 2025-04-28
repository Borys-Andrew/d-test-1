'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';

type NavBarTypes = {
  onToggleDrawer: () => void;
};

export const NavBar = ({ onToggleDrawer }: NavBarTypes) => {
  const pathname = usePathname();

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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
