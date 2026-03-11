import { apiFetch } from "@/api/client";

let cachedSessionTime = null;

export async function getSessionTime() {
  if (!cachedSessionTime) {
    cachedSessionTime = await apiFetch("/session/time");
  }

  return cachedSessionTime;
}
