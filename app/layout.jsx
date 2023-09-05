import '@/styles/globals.css';
import localFont from 'next/font/local';

import { cn } from '../lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Interceptor from '@/services/interceptor';

const mtnSans = localFont({
  variable: '--font-sans',
  src: [
    {
      path: '../assets/fonts/MTNBrighterSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'MTN Voice Of Customer',
  description: 'MTN voice of customer feedback app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn('font-sans', mtnSans.variable)}>
        <Interceptor
          component={children}
        />
        <Toaster />
        </body>
    </html>
  );
}
