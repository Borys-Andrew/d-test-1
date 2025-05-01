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
import { Badge, Container } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { CommentsDialog } from './сommentsDialog/сommentsDialog';
import { PATHS } from '../constants/paths';

type NavigationBarProps = {
  onToggleDrawer: () => void;
};

export const NavigationBar = ({ onToggleDrawer }: NavigationBarProps) => {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const { postComments } = useAppSelector((state) => state.posts);
  const [isOpen, setIsOpen] = useState(false);

  const totalComments = postComments?.length;
  const isCommetsVisible =
    pathname.startsWith(`${PATHS.posts}/`) && pathname !== PATHS.createPost;

  const getPageTitle = () => {
    if (pathname === PATHS.home) return 'DOiT MVP';
    if (pathname === PATHS.posts) return 'Posts';
    if (pathname === PATHS.createPost) return 'Create Post';
    if (pathname.startsWith(`${PATHS.posts}/`)) return 'Post Details';
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
        <Container maxWidth="xl">
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
        </Container>
      </AppBar>
      <CommentsDialog
        isOpen={isOpen}
        onToggleModal={toggleModal}
        comments={postComments}
      />
    </Box>
  );
};
