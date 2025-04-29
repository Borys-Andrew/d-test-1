'use client';

import React from 'react';
import { ThemeContextProvider } from './themeProvider';
import { StoreProvider } from './storeProvider';

type AppProvidersProps = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeContextProvider>
      <StoreProvider>{children}</StoreProvider>
    </ThemeContextProvider>
  );
};
