"use client";

import { ServerStatusInterface } from "@/interfaces/server-status-interface";
import { useQuery } from "@tanstack/react-query";

const MINUTES = 60 * 1000;

export function useServerStatus() {
  const query = useQuery({
    queryKey: ["get-server-status"],
    queryFn: fetchServerStatus,
    refetchInterval: 2 * MINUTES,
    retry: false,
  });

  return {
    ...query,
    data: query.data,
  };
}

async function fetchServerStatus(): Promise<ServerStatusInterface> {
  return await fetch("/api/status").then((res) => res.json());
}
