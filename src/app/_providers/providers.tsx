"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./auth-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib/react-query";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <CacheProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AuthProvider>{children}</AuthProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
