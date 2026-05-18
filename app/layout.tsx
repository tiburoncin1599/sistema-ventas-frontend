import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mi Tienda Online',
  description: 'Sistema de ventas online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var d=localStorage.getItem('dark')||'false';if(d==='true')document.documentElement.classList.add('dark');}catch(e){}})()`
        }} />
      </head>
      <body className={`${geist.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}