# Friends follow-up validation

Production preview QA, October 23, 2026. Implementation initially independently reviewed at 36ac8b49; publication pass adds only the requested contextual `/cc` backlink, its tests, and this evidence. `/cc` retains the existing Notion redirect (generated redirect checked in browser suite; destination HTTP 200). No content migration.

## Results
- `npm run check`: pass, 0 errors / 0 warnings / 4 existing hints.
- `npm run build`: pass; existing empty Writing collection warnings unchanged.
- Data tests: 4 pass. Design contracts: 4 pass, including backlink regression (failed before addition, passed after).
- Design browser suite: six light/dark × 390/430/1440 cases pass, including no global Friends navigation, both direct routes, headings, no overflow, contextual links, citations, desktop search/focus, standalone SVG export and `/cc` redirect HTML.
- Existing mobile explorer and touch suites pass again after backlink addition.
- Supplemental touchscreen Fit and no-JS tests rerun: both mobile widths restore exact initial viewBox after CDP pan and touchscreen `.tap()` Fit. Both routes return 200 without overflow at 390/430/1440 without JavaScript; static illustration loads and native methodology opens.
- Rewards data/assets byte-identical to upstream merge 3e408737b7fcc510a5a77cc5d165fdf4375f2636 (61 nodes, 172 relationships, 35 citations). No fresh semantic verification of partner terms claimed.
- Final source diff reviewed: navigation removal, themed Friends/map presentation, accessibility labels/state, theme-independent SVG exports, contextual guide link, changelog, tests, and validation evidence only. Pointer gesture algorithms unchanged. No automation/deploy/protection edits.

## Real browser touch evidence
Headless system Chrome 146.0.7680.178, Playwright `is_mobile=True`, `has_touch=True`, DPR 2, 390×844 / 430×844. Real CDP `Input.dispatchTouchEvent` single-contact pan/tap and two-contact pinch assert graph geometry/state; node-origin drag does not accidentally focus; height resize and cancellation recovery pass. The original suite's Fit uses mouse click; supplemental Fit explicitly uses touchscreen-backed `.tap()` at both widths. This is browser touch emulation, not physical iOS/Android or Safari certification.

## Inspected screenshots
Fresh production screenshots after backlink addition, inspected individually:
- [390 light map](friends-followup-evidence/light-390-map.png): readable heading, guide backlink, navigation, controls; no clipping.
- [430 dark expanded sources](friends-followup-evidence/dark-430-expanded.png): terms and source links readable, grouped explorer preserved.
- [1440 light desktop](friends-followup-evidence/light-1440-network.png): tabs, legend, graph and detail sidebar aligned; dense overview retains existing zoom requirement.

Reproduce from repository: `python3 -m unittest discover -s tests -p test_rewards.py -v`; same for `test_friends_design.py`; run browser scripts in `tests/` with Playwright installed and `REWARDS_TEST_URL` set to a production preview's `/friends/rewards-map/` URL. Supplementary harness and raw logs are included in the task's downloadable evidence archive.

Initial publication browser run caught the new second breadcrumb link making a generic test locator ambiguous; narrowed the locator to `/friends/`, added `/cc` assertions, and reran all six cases successfully. No failing check is represented as passing.

CI is reported separately on the PR at its exact final head. Local success does not imply repository-required CI acceptance. Root Kanban contract still targets merged PR #2; no contract or branch protection was changed.
