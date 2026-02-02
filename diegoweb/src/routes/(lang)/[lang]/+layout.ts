import { languages, type Lang } from '$lib/i18n';

export const prerender = true;

export function load({ params }) {
  	const lang = params.lang as Lang;

  	return {
    	t: languages[lang] ?? languages.en,
    	lang
  	};
}
