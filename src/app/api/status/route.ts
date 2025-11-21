import { getServerStatus } from "@/http/get-server-status";

export async function GET() {
  return await getServerStatus();
}
