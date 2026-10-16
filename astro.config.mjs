import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://kushs.org',
    // Legal pages are redirects to Notion, so they stay out of the sitemap.
    integrations: [sitemap({ filter: (page) => !/\/(privacy-policy|terms)\/$/.test(page) })],
    // GitHub Pages is static, so these become small HTML pages with a meta refresh.
    redirects: {
        // Short links that live on in bios, App Store listings and old shares.
        '/cc': 'https://kushah.notion.site/cc',
        '/app-terms': 'https://kushah.notion.site/flight-app-tc',
        '/app-privacy': 'https://kushah.notion.site/flight-app-pp',
        '/fotodex': 'https://testflight.apple.com/join/gaca1a8x',
        '/datavizmod2': 'https://colab.research.google.com/drive/1jZlqFIYKMHGCoYCdT3DD6tbj19S0aUi5?usp=sharing',

        // Routes from the React site.
        '/photography': '/photos/',
        '/digital': '/photos/',
        '/film': '/photos/',
        '/aerial': '/photos/',
        '/published': '/photos/?tag=Published',
        '/grad': '/photos/graduation/',
        '/book': '/photos/graduation/',
        '/info': '/about/',
        '/work': '/about/',
        '/education': '/about/',
        '/experience': '/about/',
        '/clubs': '/about/',
        '/chat': '/',
    },
});
