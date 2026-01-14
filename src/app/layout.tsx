import type { Metadata } from 'next';
import Provider from '@/provider';
import '../styles/globals.css';
import '../styles/tailwind.css';

export const metadata: Metadata = {
  title: 'React Next.js Boilerplate',
  description: 'React Next.js Boilerplate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
