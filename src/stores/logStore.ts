// @/stores/logStore
// refered to https://zustand.docs.pmnd.rs/integrations/persisting-store-data　

import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { StoredLog } from "@/types/log";


type LogStore = {
  storedLogs: StoredLog[]; // data from localStrage to be merged automatically
  addLog: (log: StoredLog) => void;
  deleteLog: (id: string) => void;
}

export const useLogStore = create<LogStore>()(
  persist( // call localStorage.getItem / setItem ("logs") automatically
    (set) => ({
      storedLogs: [],

      addLog: (log) =>
        set((state) => ({
          storedLogs: [log, ...state.storedLogs],
        })),

      deleteLog: (id) =>
        set((state) => ({
          storedLogs: state.storedLogs.filter((log) => log.id !== id),
        })),
    }),
    {
      name: "logs",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

