'use client';

import { store } from '@/store/store';
import { Provider } from 'react-redux';

type StoreProviderTypes = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderTypes) => {
  return <Provider store={store}>{children}</Provider>;
};
