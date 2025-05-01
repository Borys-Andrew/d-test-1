'use client';

import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <Box
      sx={{
        minHeight: {
          xs: 'calc(100vh - 56px)',
          md: 'calc(100vh - 64px)',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
