import type { ServerStatusInterface } from "@/interfaces/server-status-interface";
import { useQuery } from "@tanstack/react-query";

async function fetchServerStatus(): Promise<ServerStatusInterface> {
  return await fetch("/api/status").then((res) => res.json());
}

export function useServerStatus() {
  const query = useQuery({
    queryKey: ["server-status"],
    queryFn: fetchServerStatus,
    retry: false,
  });

  return {
    ...query,
    data: query.data,
  };
}
