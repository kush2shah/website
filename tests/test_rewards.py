"""Dependency-free integrity checks for the integrated October 21 snapshot."""
import json
from pathlib import Path
import unittest
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


class RewardsTests(unittest.TestCase):
    def setUp(self):
        self.data = json.loads((ROOT / 'src/data/rewards/network.json').read_text())
        self.sources = json.loads((ROOT / 'src/data/rewards/sources.json').read_text())
        self.logos = json.loads((ROOT / 'src/data/rewards/logos.json').read_text())

    def test_original_snapshot_counts_and_date(self):
        self.assertEqual(self.data['date'], '2026-10-21')
        self.assertEqual(len(self.data['nodes']), 61)
        self.assertEqual(len(self.data['edges']), 172)
        self.assertEqual(len(self.sources), 35)

    def test_relationship_references(self):
        ids = [n['id'] for n in self.data['nodes']]
        self.assertEqual(len(ids), len(set(ids)))
        edges = [e['id'] for e in self.data['edges']]
        self.assertEqual(len(edges), len(set(edges)))
        for edge in self.data['edges']:
            self.assertIn(edge['a'], ids)
            self.assertIn(edge['b'], ids)
            self.assertTrue(edge['sources'])
            for source in edge['sources']:
                self.assertIn(source, self.sources)

    def test_sources_are_safe_external_links(self):
        for source in self.sources.values():
            url = urlsplit(source['url'])
            self.assertIn(url.scheme, ('https', 'http'))
            self.assertTrue(url.netloc)

    def test_logos_and_static_fallback_exist(self):
        assets = ROOT / 'src/assets/rewards'
        self.assertTrue((assets / 'overview.png').is_file())
        ids = {node['id'] for node in self.data['nodes']}
        for node_id, filename in self.logos.items():
            self.assertIn(node_id, ids)
            self.assertTrue((assets / filename).is_file())


if __name__ == '__main__':
    unittest.main()
