export function parseCliArgs(argv = process.argv.slice(2)) {
  const config = {};

  for (const arg of argv) {
    const [key, value] = arg.split("=");

    switch (key) {
      case "--port":
        config.port = Number(value);
        break;
      case "--session-start-timestamp":
        config.sessionStartTimestamp = Number(value);
        break;
      case "--session-end-timestamp":
        config.sessionEndTimestamp = Number(value);
        break;
      case "--exit-on-session-end":
        config.exitOnSessionEnd = true;
        break;
    }
  }

  return config;
}
