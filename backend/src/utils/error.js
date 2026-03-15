export function handleServerError(err, port) {
	if (err.code === "EACCES") {
		console.error(`Port ${port} requires root privileges`);
	} else if (err.code === "EADDRINUSE") {
		console.error(`Port ${port} already in use`);
	} else {
		console.error(err);
	}

	process.exit(1);
}
