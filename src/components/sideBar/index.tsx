import React from 'react';
import { DrawerList } from './components';
import Drawer from '@mui/material/Drawer';

type SideBarTypes = {
  isOpen: boolean;
  onToggleDrawer: () => void;
};

export const SideBar = ({ isOpen, onToggleDrawer }: SideBarTypes) => {
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
