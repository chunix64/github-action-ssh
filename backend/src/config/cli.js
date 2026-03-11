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

      case "--sessionStartTimestamp":
        config.sessionStartTimestamp = Number(value);
        break;
      case "--sessionEndTimestamp":
        config.sessionEndTimestamp = Number(value);
        break;
    }
  }

  return config;
}
