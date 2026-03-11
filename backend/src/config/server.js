import defaultConfig from "./default.js";
import { parseCliArgs } from "./cli.js";

const cli = parseCliArgs();

const config = {
  ...defaultConfig,
  ...cli
};

export default config;
