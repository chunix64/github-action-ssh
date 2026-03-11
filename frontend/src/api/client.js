import config from "@/config";

const API_PORT = config.app.api_port;
const API_BASE = `http://localhost:${config.app.api_port}/api/v1`;

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
