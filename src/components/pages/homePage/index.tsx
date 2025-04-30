'use client';

import { PATHS } from '@/constants/paths';
import { AddCircle, List } from '@mui/icons-material';
import { Box, Typography, Button, Paper } from '@mui/material';
import Link from 'next/link';

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pt: '50px',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 2,
          textAlign: 'center',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          background: (theme) => theme.palette.custom.gradient,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
        >
          Welcome to DOiT MVP
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          We are working on an MVP of an educational platform. Join the team!
        </Typography>
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
            component={Link}
            href={PATHS.posts}
            startIcon={<List />}
          >
            Show all posts
          </Button>
          <Button
            variant="outlined"
            component={Link}
            href={PATHS.createPost}
            startIcon={<AddCircle />}
          >
            Add post
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
