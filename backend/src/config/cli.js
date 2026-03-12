export function parseCliArgs(argv = process.argv.slice(2)) {
  const config = {};

  for (const arg of argv) {
    const [key, value] = arg.split("=");

    switch (key) {
      case "--port":
        config.port = Number(value);
        break;
      case "--frontend-port":
        config.frontendPort = Number(value);
        break;
      case "--session-start-timestamp":
        console.log(`[DEBUG] cli: sessionStartTimestamp`, value, Number(value));
        config.sessionStartTimestamp = Number(value);
        break;
      case "--session-end-timestamp":
        console.log(`[DEBUG] cli: sessionEndTimestamp`, value, Number(value));
        config.sessionEndTimestamp = Number(value);
        break;
      case "--exit-on-session-end":
        console.log(`[DEBUG] cli: exitOnSessionEnd`);
        config.exitOnSessionEnd = true;
        break;
    }
  }

  return config;
}
