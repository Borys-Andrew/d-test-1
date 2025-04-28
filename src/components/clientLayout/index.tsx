'use client';

import { ReactNode, useState } from 'react';
import { NavBar } from '../navBar';
import { SideBar } from '../sideBar';
import { AppProviders } from '@/providers/appProviders';

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
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {children}
      </div>
    </AppProviders>
  );
};
