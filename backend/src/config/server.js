import { parseCliArgs } from "./cli.js";
import defaultConfig from "./default.js";

const cli = parseCliArgs();

const config = {
	...defaultConfig,
	...cli,
};

export default config;
