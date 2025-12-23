// @/types/log.ts

// The first data created by user input
export type FormLog = {
  date: string;
  mountain: string;
  weather: string;
  start: string;
  goal: string;
  breakMin: string;
  entry: string;
  exit: string;
};

// The second data converted from FormLog (user input)
export type Log = {
id: string;
date: Date;        
mountain: string;
weather: string;
start: Date;       
goal: Date;  
breakMin: number;
entry: string;
exit: string;
};

// The final data to be stored in the localStrage
export type StoredLog = {
  id: string;
  date: string;
  mountain: string;
  weather: string;
  start: string;
  goal: string;
  breakMin: number;
  entry: string;
  exit: string;
};
