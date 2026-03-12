import app from "./app.js";
import config from "./config/server.js";
import { exitOnSessionEnd } from "./utils/exit.js";
import { handleServerError } from "./utils/error.js";
import { greeting } from "./utils/log.js";

const backendServer = app.listen(config.port, () => {
  console.log(`🖥️ github-action-ssh-backend listening on port ${config.port}`);
});

backendServer.on("error", (err) => handleServerError(err, config.port));

exitOnSessionEnd();
greeting();
