function getFormattedTimeRange(totalSeconds) {
  if (totalSeconds <= 0) {
    return "00h 00m 00s";
  }

  const hours = Math.floor(totalSeconds / 3600); // 1 hour = 3600 seconds
  const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  const seconds = totalSeconds - hours * 3600 - minutes * 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;
}

function getRemainingTime(end, currentTime, message = "Unknown") {
  if (!end || end == 0) {
    return message;
  }
  return getFormattedTimeRange(end - currentTime);
}

function getUptime(start, currentTime, message = "Unknown") {
  if (!start || start == 0) {
    return message;
  }
  return getFormattedTimeRange(currentTime - start);
}

export { getRemainingTime, getUptime };
