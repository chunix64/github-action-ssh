import {
  createTunnel as createTunnelService,
  getSessionTime,
  getTunnels as getTunnelsService,
} from "../services/session.service.js";

export async function sessionTime(_req, res) {
	try {
		res.json(getSessionTime());
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export function getTunnels(_req, res) {
	try {
		res.json(getTunnelsService());
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export function createTunnel(req, res) {
	try {
		const tunnel = createTunnelService(req.body);

		res.status(201).json(tunnel);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
