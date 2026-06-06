import { ar } from "./ar";
import { en } from "./en";
import type { Locale } from "./types";

export const translations: Record<Locale, typeof en> = {
  en,
  ar,
};
