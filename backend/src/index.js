import app from "./app.js";
import config from "./config/server.js";
import { handleServerError } from "./utils/error.js";
import { exitOnSessionEnd } from "./utils/exit.js";
import { greeting } from "./utils/log.js";

const backendServer = app.listen(config.port, () => {
	console.log(`🖥️ Dashboard server listening on port ${config.port}`);
});

backendServer.on("error", (err) => handleServerError(err, config.port));

exitOnSessionEnd();
greeting();
