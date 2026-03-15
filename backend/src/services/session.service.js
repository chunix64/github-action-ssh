import config from "../config/server.js";
import state from "../services/runtimeState.js";

export function getSessionTime() {
  const time = {
    sessionStartTimestamp: config.sessionStartTimestamp,
    sessionEndTimestamp: config.sessionEndTimestamp,
  };
  return time;
}

export function getTunnels() {
  return state.tunnels;
}

export function createTunnel(url, port = 80, provider = "unknown") {
  const tunnel = ({
    url: url,
    port: port,
    provider: provider,
  });

  state.tunnels.push(tunnel);

  return tunnel;
}
