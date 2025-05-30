'use client';

import { store } from '@/store/store';
import { Provider } from 'react-redux';

type StoreProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
