export type TimeRange = {
  start: string; // Format HH:MM
  end: string;   // Format HH:MM
};

export type AppConfig = {
  latitude: number;
  longitude: number;
  textesLoading: string[];
  ranges: {
    morning: TimeRange;
    afternoon: TimeRange;
    evening: TimeRange;
  };
};

export const DEFAULT_CONFIG: AppConfig = {
  latitude: 48.112,
  longitude: -1.6743,
  textesLoading: ["J'arrive"],
  ranges: {
    morning: { start: "03:00", end: "12:00" },
    afternoon: { start: "12:00", end: "18:00" },
    evening: { start: "18:00", end: "03:00" },
  },
};

export const STORAGE_KEY = "daydash_config_v1";
