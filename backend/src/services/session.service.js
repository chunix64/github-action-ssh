import config from "../config/server.js"

export function getSessionTime() {
  const time = {
    sessionStartTimestamp: config.sessionStartTimestamp,
    sessionEndTimestamp: config.sessionEndTimestamp
  };
  return time;
}
