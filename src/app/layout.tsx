'use client';

import './globals.css';
import NextAuthSessionProvider from './providers';
import { Navbar } from '../components/layout/Navbar';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Hide navbar on auth pages
  const isAuthPage = pathname === '/auth/sign-in' || pathname === '/auth/sign-up';

  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
          {!isAuthPage && <Navbar />}
          <main>{children}</main>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}