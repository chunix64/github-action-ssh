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

export function createTunnel({
  provider = "unknown",
  dashboard = [],
  ssh = [],
  miniserve = [],
  others = [],
}) {
  const tunnel = {
    provider: provider,
    dashboard: dashboard,
    ssh: ssh,
    miniserve: miniserve,
    others: others,
  };

  state.tunnels.push(tunnel);

  return tunnel;
}
