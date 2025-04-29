'use client';

import { ReactNode, useState } from 'react';
import { NavBar } from '../navBar';
import { SideBar } from '../sideBar';
import { AppProviders } from '@/providers/appProviders';
import { Box } from '@mui/material'; // Import Box from MUI

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
      <NavBar onToggleDrawer={handleToggleDrawer} />
      <SideBar
        isOpen={open}
        onToggleDrawer={handleToggleDrawer}
      />
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 3 },
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
