'use client';

import { ReactNode, useState } from 'react';
import { AppProviders } from '@/providers/appProviders';
import { Box } from '@mui/material';
import { SidePanel } from './sidePanel/sidePanel';
import { NavigationBar } from './navigationBar';

type ClientLayoutProps = {
  children: ReactNode;
};

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AppProviders>
      <NavigationBar onToggleDrawer={handleToggleDrawer} />
      <SidePanel
        isOpen={open}
        onToggleDrawer={handleToggleDrawer}
      />
      <Box
        sx={{
          // px: { xs: 2, sm: 3, md: 3 },
          py: 2,
          bgcolor: (theme) => theme.palette.background.default,
          minHeight: {
            xs: 'calc(100vh - 56px)',
            md: 'calc(100vh - 64px)',
          },
        }}
      >
        {children}
      </Box>
    </AppProviders>
  );
};
