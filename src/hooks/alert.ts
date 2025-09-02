import { alert } from "@/data/alert";
import { useEffect } from "react";
import { toast } from "sonner";

export function useAlert() {
  if (alert.enable) {
    useEffect(() => {
      toast.error(alert.title, {
        description: alert.description,
        duration: alert.duration,
      });
    }, []);
  }
}
