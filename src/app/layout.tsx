import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import theme from '@/theme/themeConfig';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatButtonGroup from '@/components/FloatButtonGroup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev Toolbox',
  description: 'Your coding partner to improve your efficiency.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme} locale={zhCN}>
            <Header />
            {children}
            <Footer />
            <FloatButtonGroup />
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
