import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import theme from '@/theme/themeConfig';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import Header from '../components/page-header';
import Footer from '../components/page-footer';
import FloatButtonGroup from '@/components/float-buttons';

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
            <div className="content flex flex-col items-center mx-auto my-6 p-10">{children}</div>
            <Footer />
            <FloatButtonGroup />
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
