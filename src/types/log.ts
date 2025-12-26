// @/types/log.ts

// Define valid weather conditions as a union type
// This ensures type safety - only these exact strings are allowed
export type Weather = 
  | "Clear"
  | "Partially sunny"
  | "Mostly cloudy"
  | "Cloudy"
  | "Light rain"
  | "Rain"
  | "Heavy rain"
  | "Thunderstorm"
  | "Snow"
  | "Fog / Mist";

// The first data created by user input
export type FormLog = {
  date: string;
  mountain: string;
  weather: Weather; // Now type-safe!
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
weather: Weather; // Now type-safe!
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
  weather: Weather; // Now type-safe!
  start: string;
  goal: string;
  breakMin: number;
  entry: string;
  exit: string;
};
