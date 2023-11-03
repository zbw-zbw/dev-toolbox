import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import StyledComponentsRegistry from '../lib/AntdRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev Toolbox',
  description: 'Your coding partner to improve your efficiency.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
