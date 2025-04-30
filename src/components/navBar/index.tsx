'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu, Brightness4, Brightness7 } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { usePathname } from 'next/navigation';
import { useThemeContext } from '@/providers';
import { useAppSelector } from '@/store';
import { Badge } from '@mui/material';
import { useState } from 'react';
import { CommentsPostModal } from '../commentsPostModal';

type NavBarTypes = {
  onToggleDrawer: () => void;
};

export const NavBar = ({ onToggleDrawer }: NavBarTypes) => {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const { postComments } = useAppSelector((state) => state.posts);
  const [isOpen, setIsOpen] = useState(false);

  const totalComments = postComments.length;
  const isCommetsVisible =
    pathname.startsWith('/posts/') && pathname !== '/posts/create';

  const getPageTitle = () => {
    if (pathname === '/') return 'DOiT MVP';
    if (pathname === '/posts') return 'Posts';
    if (pathname === '/posts/create') return 'Create Post';
    if (pathname.startsWith('/posts/')) return 'Post Details';
    return 'DOiT MVP';
  };

  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: (theme) => theme.palette.primary.main,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onToggleDrawer}
          >
            <Menu />
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
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {isCommetsVisible && (
            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleModal}
              color="inherit"
            >
              <Badge
                badgeContent={totalComments}
                color="warning"
              >
                <CommentIcon />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <CommentsPostModal
        isOpen={isOpen}
        onToggleModal={toggleModal}
        comments={postComments}
      />
    </Box>
  );
};
