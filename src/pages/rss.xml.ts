import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, SITE } from '../lib/site';

export async function GET(context: APIContext) {
    const posts = await getPosts();
    return rss({
        title: 'Kush Shah — Writing',
        description: SITE.description,
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/writing/${post.id}/`,
        })),
    });
}
