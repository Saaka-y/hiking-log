//@/utils/logConverter.ts
import { FormLog, Log, StoredLog } from '@/types/log'


// Convert localStorage data back to domain log
export const storedLogToLog = (storedLog: StoredLog): Log => {
  return {
    id: storedLog.id,
    date: new Date(storedLog.date),
    start: new Date(storedLog.start),
    goal: new Date(storedLog.goal),
    breakMin: storedLog.breakMin,
    mountain: storedLog.mountain,
    entry: storedLog.entry,
    exit: storedLog.exit,
    weather: { ...storedLog.weather }
  }
}

// Convert form input to domain log data
export const formLogToLog = (formLog: FormLog): Log => {
  return {
    id: crypto.randomUUID(),
    date: new Date(formLog.date),
    start: new Date(formLog.start),
    goal: new Date(formLog.goal),
    breakMin: Number(formLog.breakMin),
    mountain: formLog.mountain,
    entry: formLog.entry,
    exit: formLog.exit,
    // weather info to be fetched via fetchWeather.ts
    weather: {
      main: "",
      description: "",
      icon: "",
    },
  }
}

// Convert domain log to localStorage format
export const logToStoredLog = (log: Log): StoredLog => {
  return {
    id: log.id,
    date: log.date.toISOString(),
    start: log.start.toISOString(),
    goal: log.goal.toISOString(),
    breakMin: log.breakMin,
    mountain: log.mountain,
    entry: log.entry,
    exit: log.exit,
    weather: { ...log.weather }
  }
}

