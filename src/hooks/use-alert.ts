"use client";

import { alert } from "@/data/alert";
import { useEffect } from "react";
import { toast } from "sonner";

export function useAlert() {
  useEffect(() => {
    if (alert.enable) {
      toast.error(alert.title, {
        description: alert.description,
        duration: alert.duration,
      });
    }
  }, []);
}
