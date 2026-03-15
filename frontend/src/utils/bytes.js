function formatBytes(bytes, precision = 2) {
	const units = ["B", "KB", "MB", "GB", "TB"];
	let i = 0;

	while (bytes >= 1024 && i < units.length - 1) {
		bytes /= 1024;
		i++;
	}

	return {
		value: Number(bytes.toFixed(precision)),
		unit: units[i],
		index: i,
	};
}

export function formatBytesPair(used, total, precision = 2) {
	const totalF = formatBytes(total, precision);
	const usedF = formatBytes(used, precision);

	// if used is extremely small compared to total, keep its own unit
	if (usedF.index < totalF.index) {
		return {
			used: `${usedF.value.toFixed(precision)} ${usedF.unit}`,
			total: `${totalF.value.toFixed(precision)} ${totalF.unit}`,
		};
	}

	const divisor = 1024 ** totalF.index;

	return {
		used: `${(used / divisor).toFixed(precision)} ${totalF.unit}`,
		total: `${(total / divisor).toFixed(precision)} ${totalF.unit}`,
	};
}
