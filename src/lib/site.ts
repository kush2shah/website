import { getCollection } from 'astro:content';

export const SITE = {
    name: 'Kush Shah',
    description:
        'Kush Shah — Deployed Engineer at LangChain. Apps, developer tools, writing and photography.',
    analyticsId: 'G-68JR99NH71',
    email: 'photo@kushs.org',
};

export const SOCIAL = [
    { label: 'GitHub', href: 'https://github.com/kush2shah' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kushsha/' },
    { label: 'Instagram', href: 'https://www.instagram.com/kushspictures/' },
];

// Published posts, newest first. Drafts only show up in `astro dev`.
export async function getPosts() {
    const posts = await getCollection('writing', (post) => import.meta.env.DEV || !post.data.draft);
    return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
