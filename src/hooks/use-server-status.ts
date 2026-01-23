"use client";

import { ServerStatusInterface } from "@/interfaces/server-status-interface";
import { useQuery } from "@tanstack/react-query";

export function useServerStatus() {
  const query = useQuery({
    queryKey: ["get-server-status"],
    queryFn: fetchServerStatus,
    refetchOnWindowFocus: true,
    retry: false,
  });

  return {
    ...query,
    data: query.data,
  };
}

async function fetchServerStatus(): Promise<ServerStatusInterface> {
  const res = await fetch("/api/status");
  return res.json();
}
