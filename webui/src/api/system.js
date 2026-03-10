import { apiFetch } from "@/api/client";

export function getSystemStats() {
  return apiFetch("/system");
}
