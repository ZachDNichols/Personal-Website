import { text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from "$env/dynamic/public";

export const GET: RequestHandler = () => {
    const isBeta = env.PUBLIC_ENVIRONMNET === 'beta';
    console.log(isBeta);

    const robotsTxt = isBeta 
        ? 
        `User-agent: *
Disallow: /` :
        `User-agent: *
Allow: /`;

    return text(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain'
        }
    });
};
