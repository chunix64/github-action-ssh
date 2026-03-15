import { apiFetch } from "@/api/client";

const cachedSessionData = {
	time: null,
	tunnels: null,
};

export async function getSessionTime(refresh = false) {
	if (refresh || !cachedSessionData.time) {
		cachedSessionData.time = await apiFetch("/session/time");
	}

	return cachedSessionData.time;
}

export async function getTunnels(refresh = false) {
	if (refresh || !cachedSessionData.tunnels) {
		cachedSessionData.tunnels = await apiFetch("/session/tunnels");
	}

	return cachedSessionData.tunnels;
}
