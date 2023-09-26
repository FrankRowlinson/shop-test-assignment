'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './auth-provider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/lib/react-query';
import { SnackbarProvider } from 'notistack';

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <CacheProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <SnackbarProvider autoHideDuration={3000}>
            <AuthProvider>{children}</AuthProvider>
          </SnackbarProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
