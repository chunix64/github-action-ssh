import config from "../config/server.js";
import { getFormattedTime, getFormattedTimeRange } from "./time.js";

export function exitOnSessionEnd() {
	if (config.exitOnSessionEnd && config.sessionEndTimestamp > 0) {
		const now = Math.floor(Date.now() / 1000);
		const delay = (config.sessionEndTimestamp - now) * 1000;

		console.log(`⏳ Current time:     ${getFormattedTime(now)}`);
		console.log(
			`⏳ Session ends at:  ${getFormattedTime(config.sessionEndTimestamp)}`,
		);

		if (delay <= 0) {
			console.log("🔴 Session already expired. Exiting.");
			process.exit(0);
		}

		console.log(`⏳ Process exits in: ${getFormattedTimeRange(delay / 1000)}`);

		setTimeout(() => {
			console.log("🔴 Session ended. Shutting down.");
			process.exit(0);
		}, delay);
	}
}
