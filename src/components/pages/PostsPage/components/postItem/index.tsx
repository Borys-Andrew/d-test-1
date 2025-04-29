'use client';

import {
  Box,
  Typography,
  Paper,
  IconButton,
  Grid,
  Avatar,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { Post } from '@/types';

type PostItemTypes = {
  post: Post;
};

export const PostItem = ({ post }: PostItemTypes) => {
  const userName = `User ${post.userId}`;
  const userInitial = post.title.charAt(0).toUpperCase();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Paper
        sx={{
          p: 2,
          bgcolor: (theme) => theme.palette.background.paper,
          borderRadius: 2,
        }}
      >
        <Stack spacing={1}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Avatar
              sx={{
                bgcolor: (theme) => theme.palette.custom.avatar,
                color: (theme) => theme.palette.common.white,
                width: 40,
                height: 40,
              }}
            >
              {userInitial}
            </Avatar>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                width: '100%',
              }}
            >
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: (theme) => theme.palette.text.secondary }}
                >
                  {userName}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ color: (theme) => theme.palette.error.main }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: (theme) => theme.palette.text.primary,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {post.body}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <IconButton
              component={Link}
              href={`/posts/${post.id}`}
              sx={{ color: (theme) => theme.palette.secondary.main }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Stack>
      </Paper>
    </Grid>
  );
};
