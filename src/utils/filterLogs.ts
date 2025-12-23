// @/utils/filterLogs.ts

import { StoredLog, Log } from "@/types/log"
import { storedLogToLog } from "@/utils/logConverter"

export function filterLogs(logs: StoredLog[], keyword: string): Log[] { // keyword = input value in the search box

  const domainLogs: Log[] = logs.map(log => storedLogToLog(log));

  if (!keyword.trim()) {
    return domainLogs.slice(0, 5); // the latest 5 logs if no keyword input
  } else {
    return domainLogs
      .filter(log =>
        log.mountain
          .toLowerCase()
          .includes(keyword.toLowerCase())
      ) // all the logs that have keyword ( List components to be able to scroll)
  } 
  
}


