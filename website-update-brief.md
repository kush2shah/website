# Website update brief — align kushs.org with current role (Applied AI Product Engineer)

## Context
- React + TypeScript site. Components in `src/components/`, SASS in `src/css/`.
- Goal: the site currently presents Kush as a *Product Manager owning A2P messaging*. That's stale. He's now an **Applied AI Product Engineer** at Bandwidth (since March 2026) focused on developer experience, agent-native tooling, and the shift to agentic coding. Update the site to reflect this without overstating.
- Tone: confident but humble. Do NOT use phrasing like "defined the role" or "full autonomy." Let the work speak.
- **Privacy guardrail:** this is a PUBLIC site. Do NOT publish confidential business figures (e.g. specific revenue numbers) or name specific customers (Google/Block/Microsoft). Those stay on the private resume only. Keep scale generic ("thousands of enterprise customers").
- After changes, run `npm run build` to confirm nothing breaks.

---

## Task 1 — Rewrite the About bio + tagline (`src/components/Info.tsx`)  [highest priority]

Replace the tagline:
- Old: `Photos · Products · Travel`
- New: `Applied AI · Products · Photography`

Replace the `info-bio` paragraphs with:

> I'm an Applied AI Product Engineer at Bandwidth, where I build developer experience and agent-native tooling — helping the company and its customers get ready for the agentic era of software. I've shipped Bandwidth's open-source CLI, a Pipecat voice integration, an API spec-reviewer bot, and company-wide AI tooling, and I work across engineering, sales, product, and leadership to shape how we adopt AI.

> At UNC Chapel Hill, I studied Computer Science and Business Administration with a minor in Philosophy, Politics, and Economics.

> I'm passionate about building things people actually use — and understanding the people I'm building for, so I can improve their lives through the products I make.

> In the time left over, I take photos of the people and world around me, travel, listen to music, and push myself into new territory wherever I can find it.

---

## Task 2 — Add Bandwidth to Work Experience (`src/components/experience/Work.tsx`)  [high priority]

Bandwidth is currently missing from the Work list entirely. Add it as the **first** item in the `items` array (most recent). The `Experience` type is `{ company, co, logo, role, period, desc: string[] }`.

- Logo: reuse the existing Bandwidth image at `src/assets/experience/projects/bandwidth.png`, or add a proper logo to `src/assets/logos/`. Import it like the other logos.

New entry:
```ts
{
    company: 'Bandwidth',
    co: 'bandwidth',
    logo: bandwidth, // import accordingly
    role: 'Applied AI Product Engineer',
    period: 'July 2024 – Present',
    desc: [
        "I joined Bandwidth as a Product Manager owning 10DLC and toll-free messaging infrastructure, and in March 2026 I stepped into a new role: Applied AI Product Engineer, driving the company's AI strategy for developer experience and the shift to agentic coding.",
        "I work directly with engineering, sales, product, and executive leadership to take ideas from proposal to shipped. I built Bandwidth's official open-source CLI (band) to make our APIs agent-native, a TwiML→BXML adapter that lets Twilio customers migrate to Bandwidth with minimal lift, an API spec-reviewer bot that cut review cycles from roughly ten rounds to one, a community Pipecat integration for agentic voice (featured in Pipecat's docs), and a company-wide Claude.md generator rolled out to 700+ employees.",
        "Earlier, as Product Manager I, I owned the roadmap for messaging infrastructure serving thousands of enterprise customers and led a zero-downtime migration of 10B+ monthly messages and 5M+ phone numbers to a new aggregator.",
    ],
},
```

Also fix a consistency nit while here: change Cisco's `role` from `'Marketing Specialist'` to `'Customer Marketing Intern'` (matches the resume).

---

## Task 3 — Add Momento + WeatherApp to Projects (`src/components/experience/Projects.tsx`)  [high priority]

The `Project` type is `{ name, href?, color, role, icon, desc, badge?, screens[], wide?, actions? }`, with dark/light asset pairs selected via the `d` (isDarkMode) boolean and an optional `badge: { img, href, alt }`.

Keep **Bandwidth CLI as the first project.** Add Momento and WeatherApp right after it (newest builds up top). Leave Centible / FlightTracky / Rollganizer / Fotodex as-is.

**Assets needed (Kush will provide real images — use placeholders or reuse an existing icon until then):**
- `src/assets/experience/projects/momento.png` (+ optional `-dark`), plus screenshots in `momento-screenshots/`
- `src/assets/experience/projects/weatherapp.png` (+ optional `-dark`), plus screenshots in `weatherapp-screenshots/`

Momento entry:
```ts
{
    name: 'Momento',
    color: '#E0567A',
    role: 'Creator and Developer',
    icon: d ? momentoIconDark : momentoIcon,
    desc: "Momento connects your photos to the music you were listening to when you took them. As the sole creator and developer, I built it in SwiftUI with SwiftData — matching photo timestamps against your Apple Music history through MusicKit and PhotoKit, and generating playlists from the songs behind your memories.",
    badge: { img: testFlightBadge, href: 'REPLACE_WITH_TESTFLIGHT_LINK', alt: 'Join the Beta on TestFlight' },
    screens: [ /* momento screenshots */ ],
},
```

WeatherApp entry (no store badge yet — pending App Store release; add the badge when live):
```ts
{
    name: 'WeatherApp',
    color: '#3FA7D6',
    role: 'Creator and Developer',
    icon: d ? weatherIconDark : weatherIcon,
    desc: "WeatherApp aggregates five weather sources — Apple WeatherKit, Google, NOAA, OpenWeatherMap, and Tomorrow.io — into one normalized model, with side-by-side forecast comparison built in Swift Charts. I built it in SwiftUI on an MVVM architecture with a lightweight caching proxy backend.",
    screens: [ /* weatherapp screenshots */ ],
},
```

If you want a "release pending" cue for WeatherApp without a working store link, add a small non-link label in the project styles rather than a `badge` (which requires an href).

---

## Task 4 — (Optional, needs Kush's input) Add a short "Writing" / "Now" section
For FDE / AI-lab audiences, public thinking on the agentic-coding shift is a strong differentiator. Consider a lightweight `/writing` route (or a section on the About page) with one short essay on what Kush learned preparing an engineering org for agentic coding. Don't draft the essay — Kush will provide the content. Just scaffold the route/section to match existing patterns (`src/components/App.tsx` for routes).

---

## Acceptance
- About bio + tagline updated (Task 1).
- Bandwidth appears first in Work, Cisco label fixed (Task 2).
- Momento + WeatherApp appear in Projects with CLI still first (Task 3).
- No confidential revenue figures or named customers anywhere on the public site.
- `npm run build` succeeds.
