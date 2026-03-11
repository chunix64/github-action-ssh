import config from "../config/server.js";

export function exitOnSessionEnd() {
  if (config.exitOnSessionEnd && config.sessionEndTimestamp > 0) {
    const now = Math.floor(Date.now() / 1000);
    const delay = (config.sessionEndTimestamp - now) * 1000;

    if (delay <= 0) {
      console.log("Session already expired. Exiting.");
      process.exit(0);
    }

    console.log(`Process will exit at ${config.sessionEndTimestamp}`);

    setTimeout(() => {
      console.log("Session ended. Shutting down.");
      process.exit(0);
    }, delay);
  }
}
