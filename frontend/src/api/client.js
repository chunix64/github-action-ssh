import config from "@/config";

// For dev
// const api_host = config?.app?.api_host ?? "localhost";

const api_host = config?.app?.api_host;
const api_port = config?.app?.api_port;
const api_base = config?.app?.api_base;

var API_BASE = `${api_base}`;

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
		return null;
	}

	if (!res.ok) {
		console.warn(`API error: ${res.status}`);
		return null;
	}

	try {
		return await res.json();
	} catch (error) {
		console.warn("JSON parse error:", error.message);
		return null;
	}
}
