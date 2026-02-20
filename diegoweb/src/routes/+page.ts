import { redirect } from '@sveltejs/kit';

/* rollback to redirection, it does not cause conflict with CDN redirection */
export function load() {
	throw redirect(307, '/en/');

}