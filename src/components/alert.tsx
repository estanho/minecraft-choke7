"use client";

import { Toaster } from "@/components/ui/sonner";
import { alert } from "@/data/alert";
import { useEffect } from "react";
import { toast } from "sonner";

export function Alert() {
  useEffect(() => {
    if (alert.enable) {
      toast.info(alert.title, {
        description: alert.description,
        duration: alert.duration,
        style: {
          background: "white",
          color: "black",
        },
      });
    }
  }, []);

  return <Toaster theme="light" />;
}
