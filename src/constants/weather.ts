// @/constants/weather.ts
import { Weather } from '@/types/log';

export const WEATHER_OPTIONS: readonly Weather[] = [
  "Clear",
  "Partially sunny",
  "Mostly cloudy",
  "Cloudy",
  "Light rain",
  "Rain",
  "Heavy rain",
  "Thunderstorm",
  "Snow",
  "Fog / Mist",
] as const;
