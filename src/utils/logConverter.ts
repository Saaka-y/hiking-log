//@/utils/logConverter.ts
import { FormLog, Log, StoredLog } from '@/types/log'


// Convert localStorage data back to domain log
export const storedLogToLog = (storedLog: StoredLog): Log => {
  return {
    id: storedLog.id,
    date: new Date(storedLog.date),
    mountain: storedLog.mountain,
    weather: storedLog.weather,
    start: new Date(storedLog.start),
    goal: new Date(storedLog.goal),
    breakMin: storedLog.breakMin,
    entry: storedLog.entry,
    exit: storedLog.exit,
  }
}

// Convert form input to domain log data
export const formLogToLog = (formLog: FormLog): Log => {

  // To avoid "invalid date" error
  const start = new Date(`${formLog.date}T${formLog.start}`);
  const goal  = new Date(`${formLog.date}T${formLog.goal}`);

  return {
    id: crypto.randomUUID(),
    date: new Date(formLog.date),
    mountain: formLog.mountain,
    weather: formLog.weather,
    start,
    goal,
    breakMin: Number(formLog.breakMin),
    entry: formLog.entry,
    exit: formLog.exit,
  }
}

// Convert domain log to localStorage format
export const logToStoredLog = (log: Log): StoredLog => {
  return {
    id: log.id,
    date: log.date.toISOString(),
    mountain: log.mountain,
    weather: log.weather,
    start: log.start.toISOString(),
    goal: log.goal.toISOString(),
    breakMin: log.breakMin,
    entry: log.entry,
    exit: log.exit,
  }
}

