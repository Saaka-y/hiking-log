// @/stores/logStore
// refered to https://zustand.docs.pmnd.rs/integrations/persisting-store-data　

import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { StoredLog } from "@/types/log";


type LogStore = {
  storedLogs: StoredLog[]; // data from localStrage to be merged automatically
  selectedLogId: string | null;
  selectLog: (id: string) => void;
  clearSelectedLog: () => void;
  addLog: (log: StoredLog) => void;
  deleteLog: (id: string) => void;
  updateLog: (log: StoredLog) => void;
}

export const useLogStore = create<LogStore>()(
  persist( // call localStorage.getItem / setItem ("logs") automatically
    (set) => ({
      storedLogs: [],
      selectedLogId: null,
      selectLog: (id) => set({selectedLogId: id}),
      clearSelectedLog: () => set({ selectedLogId: null }),

      addLog: (log) =>
        set((state) => ({
          storedLogs: [log, ...state.storedLogs],
        })),

      deleteLog: (id) =>
        set((state) => ({
          storedLogs: state.storedLogs.filter((log) => log.id !== id),
        })),
      
      updateLog: (editedLog) => 
        set((state) => ({
          storedLogs: state.storedLogs.map(log => log.id === editedLog.id ? editedLog : log),
        })),
    }),

    {
      name: "logs",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

