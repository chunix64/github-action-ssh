import config from "../config/server.js";
import { getFormattedTime, getFormattedTimeRange } from "./time.js";

export function exitOnSessionEnd() {
  console.log(`[DEBUG] util: exitOnSessionEnd`, config.exitOnSessionEnd);
  console.log(`[DEBUG] util: sessionEndTimestamp`, config.sessionEndTimestamp);
  if (config.exitOnSessionEnd && config.sessionEndTimestamp > 0) {
    const now = Math.floor(Date.now() / 1000);
    const delay = (config.sessionEndTimestamp - now) * 1000;

    console.log(
      `⏳ Process exits at: ${getFormattedTime(config.sessionEndTimestamp)}`,
    );

    if (delay <= 0) {
      console.log("🔴 Session already expired. Exiting.");
      process.exit(0);
    }

    console.log(
      `⏳ Process will exit after ${getFormattedTimeRange(delay / 1000)}`,
    );

    setTimeout(() => {
      console.log("🔴 Session ended. Shutting down.");
      process.exit(0);
    }, delay);
  }
}
