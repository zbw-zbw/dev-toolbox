'use client';

import { Provider } from 'react-redux';

import store from '@/store';
import ThemeProvider from './ThemeProvider';

function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}

export default StoreProvider;
