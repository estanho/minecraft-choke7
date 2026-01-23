import { getServerStatus } from "@/http/get-server-status";

export const revalidate = 300;

export async function GET() {
  return await getServerStatus();
}
