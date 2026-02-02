import { languages } from '$lib/i18n';

export const prerender = true;

// Static generation of all language routes
export function entries() {
	return Object.keys(languages).map((lang) => ({ lang }));
}
