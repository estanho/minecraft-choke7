import { getServerStatus } from "@/http/get-server-status";

export const revalidate = 120;

export async function GET() {
  return await getServerStatus();
}
