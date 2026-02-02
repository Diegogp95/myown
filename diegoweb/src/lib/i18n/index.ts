import es from './es';
import en from './en';

export const languages = { es, en };
export type Lang = keyof typeof languages;
