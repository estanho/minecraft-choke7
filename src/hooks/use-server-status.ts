import type { ServerStatusInterface } from "@/interfaces/server-status-interface";
import { useQuery } from "@tanstack/react-query";

export function useServerStatus() {
  const query = useQuery({
    queryKey: ["server-status"],
    queryFn: fetchServerStatus,
    refetchInterval: 60 * 2 * 1000,
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
