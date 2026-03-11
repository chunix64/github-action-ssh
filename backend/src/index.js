import app from "./app.js";
import config from "./config/server.js";

const backendServer = app.listen(config.port, () => {
  console.log(`github-action-ssh-backend listening on ${config.port}`);
});

const frontendServer = app.frontend.listen(config.frontendPort, () => {
  console.log(`github-action-ssh-webui listening on ${config.frontendPort}`);
});


backendServer.on("error", (err) => {
  if (err.code === "EACCES") {
    console.error(`Port ${config.port} requires root privileges`);
  } else if (err.code === "EADDRINUSE") {
    console.error(`Port ${config.port} already in use`);
  }
});

frontendServer.on("error", (err) => {
  if (err.code === "EACCES") {
    console.error(`Port ${config.frontendPort} requires root privileges`);
  } else if (err.code === "EADDRINUSE") {
    console.error(`Port ${config.frontendPort} already in use`);
  }
});
