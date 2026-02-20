import { redirect } from '@sveltejs/kit';

/* Redirection only in development mode, as we delegate the language selection to the CDN in production. */
/* Could this cause any issues? Maybe not, but it's something to keep in mind. */
/* Keep in mind the root page doesn't have any content, it's just a redirection to the default language. */
export function load() {
	if (import.meta.env.DEV) {
		throw redirect(307, '/en/');
	}

	return {};
}