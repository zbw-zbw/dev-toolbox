'use client';

import { selectIsDarkMode } from '@/store/darkModeSlice';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { useSelector } from 'react-redux';

import Footer from '@/components/page-footer';
import Header from '@/components/page-header';
import FloatButtonGroup from '@/components/float-buttons';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 16,
          colorPrimary: '#52c41a',
        },
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
      locale={zhCN}
    >
      <Header />
      {children}
      <Footer />
      <FloatButtonGroup />
    </ConfigProvider>
  );
}

export default ThemeProvider;
