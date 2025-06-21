import { Outfit } from 'next/font/google';
import '../content/styles/globals.css';

import { SidebarProvider } from '@/components/admin/context/SidebarContext';
import { ThemeProvider } from '@/components/admin/context/ThemeContext';
import NextTopLoader from 'nextjs-toploader';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <NextTopLoader />
        <ThemeProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
