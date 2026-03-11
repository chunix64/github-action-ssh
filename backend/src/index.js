import app from "./app.js";
import config from "./config/server.js";
import { exitOnSessionEnd } from "./utils/exit.js";
import { handleServerError } from "./utils/error.js";

const backendServer = app.listen(config.port, () => {
  console.log(`github-action-ssh-backend listening on ${config.port}`);
});

const frontendServer = app.frontend.listen(config.frontendPort, () => {
  console.log(`github-action-ssh-webui listening on ${config.frontendPort}`);
});

backendServer.on("error", (err) => handleServerError(err, config.port));
frontendServer.on("error", (err) => handleServerError(err, config.frontendPort));

exitOnSessionEnd();
