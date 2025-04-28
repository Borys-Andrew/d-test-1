'use client';

import React from 'react';
import { ThemeContextProvider } from '@/theme/themeContext';

type AppProvidersProps = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};
