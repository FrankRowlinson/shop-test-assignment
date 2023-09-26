import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './_providers/providers';
import { Container, Flex } from '@chakra-ui/react';
import { Navbar } from '@/shared/ui/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Shop',
  description: 'Test assignment app created for Web Atom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Flex
            maxW="5xl"
            mx="auto"
            minH="80dvh"
            align="center"
            justify="center"
            p="4"
          >
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
