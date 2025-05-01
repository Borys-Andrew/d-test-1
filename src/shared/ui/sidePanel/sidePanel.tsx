'use client';

import React from 'react';
import Drawer from '@mui/material/Drawer';
import { DrawerList } from './components/drawerList';

type SidePanelProps = {
  isOpen: boolean;
  onToggleDrawer: () => void;
};

export const SidePanel = ({ isOpen, onToggleDrawer }: SidePanelProps) => {
  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={onToggleDrawer}
      >
        {<DrawerList onToggleDrawer={onToggleDrawer} />}
      </Drawer>
    </div>
  );
};
