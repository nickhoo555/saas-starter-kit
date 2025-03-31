import '@boxyhq/react-ui/dist/react-ui.css';
import '../styles/globals.css';

import app from '@/lib/app';
import { Themer } from '@boxyhq/react-ui/shared';
import colors from 'tailwindcss/colors';
import { Toaster } from 'react-hot-toast';
import { Metadata } from 'next';
import Providers from './providers';

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
          {/* <Themer
            overrideTheme={{
              '--primary-color': colors.blue['500'],
              '--primary-hover': colors.blue['600'],
              '--primary-color-50': colors.blue['50'],
              '--primary-color-100': colors.blue['100'],
              '--primary-color-200': colors.blue['200'],
              '--primary-color-300': colors.blue['300'],
              '--primary-color-500': colors.blue['500'],
              '--primary-color-600': colors.blue['600'],
              '--primary-color-700': colors.blue['700'],
              '--primary-color-800': colors.blue['800'],
              '--primary-color-900': colors.blue['900'],
              '--primary-color-950': colors.blue['950'],
            }}
          > */}
            {children}
          {/* </Themer> */}
        </Providers>
      </body>
    </html>
  );
}
