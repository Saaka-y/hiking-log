// @/stores/logStore
// （logs配列のlocalStrage保存）logs: Log[ ]・addLog(log: Log)・deleteLog(id)・editLog(id)

import { create } from "zustand";
import { Log } from "@/types/log";

type LogStore = {
  logs: Log[];
  addLog: (log: Log) => void;
  deleteLog: (id: string) => void;
}

export const useLogStore = create<LogStore>((set) => ({
  logs: [],

  addLog: (log) =>
    set((state) => ({
      logs: [log, ...state.logs], // ← latestリストを出すため先頭に入れる
    })),

  deleteLog: (id) =>
    set((state) => ({
      logs: state.logs.filter((log) => log.id !== id),
    })),

}))