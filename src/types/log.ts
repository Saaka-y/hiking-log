// @/types/log.ts


// for UI/form (all string for input elements)
export type FormLog = {
  date: string;
  start: string;
  goal: string;
  breakMin: string;
  mountain: string;
  entry: string;
  exit: string;
};

// for Domain
export type Log = {
id: string;
date: Date;        
start: Date;       
goal: Date;  
breakMin: number;
mountain: string;
entry: string;
exit: string;
weather: Weather;
};

// weather data
export type Weather = {
  main: string;
  description: string;
  icon: string;
};

// for strage
export type StoredLog = {
  id: string;
  date: string;
  start: string;
  goal: string;
  breakMin: number;
  mountain: string;
  entry: string;
  exit: string;
  weather: Weather;
};