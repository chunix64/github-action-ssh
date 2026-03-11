import morgan from "morgan";

import app from "./app.js";
import config from "./config/server.js";
import { exitOnSessionEnd } from "./utils/exit.js";
import { handleServerError } from "./utils/error.js";

app.use(morgan('dev'));

const backendServer = app.listen(config.port, () => {
  console.log(`github-action-ssh-backend listening on ${config.port}`);
});

backendServer.on("error", (err) => handleServerError(err, config.port));

exitOnSessionEnd();
