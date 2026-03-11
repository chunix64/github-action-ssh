import app from "./app.js";
import config from "./config/server.js";

app.listen(config.port, () => {
  console.log(`github-action-ssh-backend listening on ${config.port}`);
});

app.frontend.listen(config.frontendPort, () => {
  console.log(`github-action-ssh-webui listening on ${config.frontendPort}`);
});
