function getTimezone() {
  const offset = -new Date().getTimezoneOffset(); // minutes

  const sign = offset >= 0 ? "+" : "-";
  const abs = Math.abs(offset);

  const hours = String(Math.floor(abs / 60)).padStart(2, "0");
  const minutes = String(abs % 60).padStart(2, "0");

  return `UTC${sign}${hours}:${minutes}`;
}

function isSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function getFormattedTimeRange(totalSeconds) {
  if (totalSeconds <= 0) {
    return "00h 00m 00s";
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  const seconds = totalSeconds - hours * 3600 - minutes * 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;
}

export function getFormattedTime(timestamp, withTimezone = true) {
  const now = new Date();
  const date = new Date(timestamp * 1000);

  const time = date.toLocaleTimeString(undefined, { hour12: false });

  const base = isSameDay(now, date)
    ? time
    : `${date.toLocaleDateString()} ${time}`;

  return withTimezone ? `${base} ${getTimezone()}` : base;
}
