import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import Provider from '@/provider';
import '../styles/globals.css';
import '../styles/tailwind.css';

export const metadata: Metadata = {
  title: 'React Next.js Boilerplate',
  description: 'React Next.js Boilerplate',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <PageLayout>{children}</PageLayout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
