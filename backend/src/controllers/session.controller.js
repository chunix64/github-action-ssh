import { getSessionTime, getTunnels as getTunnelsService, createTunnel as createTunnelService } from "../services/session.service.js";

export async function sessionTime(req, res) {
  try {
    res.json(getSessionTime());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export function getTunnels(req, res) {
  try {
    res.json(getTunnelsService());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export function createTunnel(req, res) {
  try {
    const { url, port, provider } = req.body;

    if (!url) {
      return res.status(400).json({ error: "url is required" });
    }

    const tunnel = createTunnelService(url, port, provider);

    res.status(201).json(tunnel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
