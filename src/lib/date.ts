import { DateTime, Duration } from "luxon";

export function DateTimeFromIso(date: string) {
  return DateTime?.fromISO(date)
    .setLocale("es")
    .toLocaleString(DateTime.DATE_MED);
}

export function DurationFromMillisecondsToMinutes(duration: number) {
  return Duration.fromMillis(duration).toFormat("mm:ss");
}
