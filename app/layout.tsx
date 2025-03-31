import '@boxyhq/react-ui/dist/react-ui.css';
import '../styles/globals.css';

import app from '@/lib/app';
import colors from 'tailwindcss/colors';
import { Toaster } from 'react-hot-toast';
import { Metadata } from 'next';
import Providers from './providers';
import ThemeProvider from '../components/ThemeProvider';

// 提供元数据配置，替代pages中的Head组件
export const metadata: Metadata = {
  title: {
    template: `%s | ${app.name}`,
    default: app.name,
  },
  description: 'SaaS Starter Kit',
  icons: {
    icon: 'https://boxyhq.com/img/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Toaster toastOptions={{ duration: 4000 }} />
          {/* <ThemeProvider> */}
            {children}
          {/* </ThemeProvider> */}
        </Providers>
      </body>
    </html>
  );
}
