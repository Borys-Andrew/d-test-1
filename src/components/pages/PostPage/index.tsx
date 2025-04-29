'use client';

import {
  Avatar,
  Box,
  Button,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { PATHS } from '@/constants/paths';

type PostDetailsPageProps = {
  id: string;
};

export const PostDetailsPage = ({ id }: PostDetailsPageProps) => {
  const post = {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  };
  const userName = `User ${post.userId}`;
  const userInitial = post.title.charAt(0).toUpperCase();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Post Details</h1>
      <p>Showing details for post ID: {id}</p>
      <Paper
        sx={{
          p: 2,
          bgcolor: (theme) => theme.palette.background.paper,
          borderRadius: 2,
        }}
      >
        <Stack spacing={4}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: (theme) => theme.palette.text.primary,
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
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: (theme) => theme.palette.text.primary,
              }}
            >
              {post.body}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              width: {
                xs: '100%',
                sm: 'fit-content',
              },
            }}
          >
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              component={Link}
              href={PATHS.posts}
              startIcon={<ArrowBack />}
            >
              To the list
            </Button>
          </Box>
        </Stack>
      </Paper>
    </div>
  );
};
