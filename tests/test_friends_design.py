"""Focused integration contracts; browser suites cover rendered behavior."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

class FriendsDesignTests(unittest.TestCase):
    def test_navigation_keeps_friends_unlisted(self):
        self.assertNotIn("href: '/friends/'", (ROOT / 'src/components/Nav.astro').read_text())

    def test_routes_keep_contextual_links(self):
        self.assertIn('href="/friends/rewards-map/"', (ROOT / 'src/pages/friends/index.astro').read_text())
        self.assertIn('href="/friends/"', (ROOT / 'src/pages/friends/rewards-map.astro').read_text())

    def test_map_uses_site_theme_and_heading(self):
        source = (ROOT / 'src/components/RewardsMap.astro').read_text()
        self.assertIn('class="page-title"', source)
        self.assertNotIn('color-scheme:dark', source)
        self.assertNotIn('Georgia', source)
        self.assertNotIn('#0b1118', source)
        self.assertIn('var(--text)', source)
        self.assertIn('id="static-map"', source)

if __name__ == '__main__':
    unittest.main()
