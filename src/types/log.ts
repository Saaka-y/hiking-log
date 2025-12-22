// @/types/log.ts

// The first data created by user input
export type FormLog = {
  date: string;
  mountain: string;
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
start: Date;       
goal: Date;  
breakMin: number;
entry: string;
exit: string;
weather: Weather;
};

// The final data to be stored in the localStrage
export type StoredLog = {
  id: string;
  date: string;
  mountain: string;
  start: string;
  goal: string;
  breakMin: number;
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
