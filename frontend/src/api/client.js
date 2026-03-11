import config from "@/config";

const api_host = config?.app?.api_host;
const api_port = config?.app?.api_port;
const api_base = config?.app?.api_base;

var API_BASE = `/${api_port}${api_base}`;

if (api_host) {
  API_BASE = `http://${api_host}:${api_port}${api_base}`;
}

export async function apiFetch(path, options = {}) {
  let res;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
  } catch (error) {
    console.warn(`Network error: ${error.message}`);
    return {};
  }

  if (!res.ok) {
    console.warn(`API error: ${res.status}`);
    return {};
  }

  return res.json();
}
