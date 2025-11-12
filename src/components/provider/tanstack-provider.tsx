"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function TanstackProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
}
