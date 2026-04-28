# Улаанбаатар — ulaanbaatar.app

A personal website about Ulaanbaatar, Mongolia — built by someone born and living here.

This is not a news site or a government dashboard. It is one person's attempt to hold two truths about the same city simultaneously: that Ulaanbaatar is one of the most spiritually extraordinary cities in the world, and that it is choking on pollution. Both things are true. Neither cancels the other.

**Live site:** [www.ulaanbaatar.app](https://www.ulaanbaatar.app)

---

## What this site is

| Section                 | Purpose                                                                          |
| ----------------------- | -------------------------------------------------------------------------------- |
| **Home**                | The entry point — live AQI, the four sacred mountains, links to all sections     |
| **Weather / AQI**       | Real-time air quality data, historical trends, forecasts                         |
| **Sacred City**         | The history of Ulaanbaatar as a sacred place — monasteries, mountains, Zanabazar |
| **Museums & Galleries** | Personal guide to the cultural memory of the city                                |
| **Passivhaus**          | Complete guide to building energy-efficient homes in Mongolia's climate          |

---

## Writing rules

These rules apply everywhere in the codebase — in `.tsx` files, `.ts` data files, markdown, and any string that will be rendered to the browser.

### 1. File location comment

Every file must begin with a comment stating its path relative to the project root. This makes it easy to locate a file from a code snippet shared out of context.

**`.tsx` / `.ts` files:**

```tsx
// app/about/page.tsx
```

**`.css` files:**

```css
/* app/globals.css */
```

This comment goes on the very first line, before imports.

---

### 2. HTML entities for text content in JSX

Use HTML entities for punctuation and special characters inside JSX. This keeps VSCode and the TypeScript compiler from raising warnings, and avoids ambiguity between markup and content.

| Character | Entity     |
| --------- | ---------- |
| `"`       | `&quot;`   |
| `'`       | `&apos;`   |
| `&`       | `&amp;`    |
| `—`       | `&mdash;`  |
| `–`       | `&ndash;`  |
| `«`       | `&laquo;`  |
| `»`       | `&raquo;`  |
| `…`       | `&hellip;` |

`&lt;` and `&gt;` are always required when a literal `<` or `>` would be interpreted as markup.

Non-breaking space (`&nbsp;`) should still be avoided in favour of CSS layout solutions — it creates invisible characters that are hard to debug.

This rule applies to:

- All string content inside JSX returns in `.tsx` components
- Museum descriptions, sacred city content, and any other data files rendered to the browser
- Any future content files added to the project

Note: entities are not needed in `.ts` files that never produce JSX output, or in plain string variables that are not rendered directly as HTML. Use judgement — if it touches the DOM, use entities.

---

## Design language

The site uses a Japanese minimalist aesthetic — sparse, high-contrast, intentional. Every element earns its place.

**Fonts**

- `Playfair Display` — headings, quotes, sacred/poetic content (`--font-playfair`)
- `Inter` — navigation, labels, UI chrome (`--font-inter`)
- `Noto Sans` (Cyrillic) — Mongolian body text (`--font-mongolian`)
- `Mono` (system) — numbers, data, AQI values

**Layout principles**

- Vertical spine column (32px) on hero sections — Japanese book design
- Bento grid for homepage sections — equal-weight cards
- Hairline borders (`border-gray-100`) — almost invisible structure
- Extra-small uppercase labels (`9px`, `letter-spacing: 0.14em`) for eyebrows
- No decorative icons or emoji in UI chrome

**Color use**

- Amber / warm tones — sacred city content only
- Monospace cold numbers — data and AQI
- Gray scale for everything else
- AQI pill in header uses semantic color (green → dark red) based on live value

**Voice**

- Mongolian primary, English secondary on cultural/poetic content
- Data labels in Mongolian

---

## Data sources

| Data                | Source     | Revalidation | Notes                                                   |
| ------------------- | ---------- | ------------ | ------------------------------------------------------- |
| AQI (city-level)    | WAQI API   | 2 min        | `/feed/ulaanbaatar/` — used in header + AQINumber       |
| AQI (station-level) | WAQI API   | on-demand    | Per-station fetch in AQIDetail — differs from city feed |
| Weather forecast    | Open-Meteo | 1 hour       | No API key required                                     |
| Header temperature  | Open-Meteo | client fetch | Fetched fresh on every page load by `HeaderLiveWeather` |
| Header wind speed   | Open-Meteo | client fetch | Same request as header temperature — current hour only  |
| Precipitation radar | RainViewer | on-demand    | Loaded only when layer is toggled                       |
| Regional wind       | Open-Meteo | on-demand    | Loaded only when layer is toggled                       |

**Header architecture:** The AQI pill is server-fetched in `layout.tsx` (2-min revalidation). Temperature and wind are fetched client-side by `HeaderLiveWeather` — a `'use client'` component that calls Open-Meteo directly on page load, always showing the current hour. This keeps the header in sync with the weather page without relying on cached layout data.

**Weather page:** `OpenMeteoForecast` shows the current hour's temperature and wind as the hero values, with today's daily high/low as secondary context. The 7-day table follows below. AQI is shown separately via `AQINumber`, then expanded in `AQIDetail` with station-level drill-down. Station readings may differ from the city aggregate; this is labeled explicitly in the UI.

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display, Inter, Noto Sans (Cyrillic)
- **Air quality:** WAQI API
- **Weather:** Open-Meteo API
- **Database:** Supabase (PostgreSQL)
- **Map:** Leaflet.js + OpenStreetMap

---

## Project structure

```
ulaanbaatar/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   ├── forecast/route.ts
│   │   ├── historical/route.ts
│   │   └── historical-pollution/route.ts
│   ├── museums/
│   │   └── page.tsx
│   ├── passivhaus/
│   │   ├── airtightness/page.tsx
│   │   ├── construction/page.tsx
│   │   ├── heating/page.tsx
│   │   ├── insulation/page.tsx
│   │   ├── introduction/page.tsx
│   │   ├── materials/page.tsx
│   │   ├── ventilation/page.tsx
│   │   ├── windows/page.tsx
│   │   └── page.tsx
│   ├── sacred/
│   │   └── page.tsx
│   ├── weather/
│   │   ├── terms/page.tsx
│   │   └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── charts/
│   ├── home/
│   │   ├── AQINumber.tsx
│   │   ├── AQIDetail.tsx
│   │   ├── InsightsDashboard.tsx
│   │   └── InteractiveHero.tsx
│   ├── map/
│   │   ├── AQIMap.tsx
│   │   ├── AQIMapWrapper.tsx
│   │   └── WeatherLayerControls.tsx
│   ├── terms/
│   ├── weather/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeaderLiveWeather.tsx
│   └── Menu.tsx
└── lib/
    ├── constants.ts
    ├── fetchAQI.ts
    ├── fetchForecast.ts
    ├── fetchHistoricalAQI.ts
    ├── fetchHistoricalPollution.ts
    ├── fetchOpenMeteo.ts
    ├── fetchStations.ts
    ├── fetchWeather.ts
    ├── mongolianDate.ts
    ├── pollutantInfo.ts
    ├── rainviewer.ts
    ├── supabase.ts
    ├── weatherImpactAnalyzer.ts
    └── windOverlay.ts
```

---

## Weather page structure

The weather page follows a deliberate information hierarchy — from universal and quick to specific and deep:

```
1. Page label
2. OpenMeteoForecast       ← current temp & wind, today's range, 7-day table
3. AQINumber               ← city-level AQI at a glance (matches header)
4. AQIMapWrapper           ← spatial context for the AQI reading
5. AQIDetail               ← station drill-down: pollutants + station selector
6. InsightsDashboard       ← historical trends (power users)
```

`OpenMeteoForecast` leads with the current hour's temperature and wind as the hero — not tomorrow's forecast. The daily high/low for today appears as secondary context. The 7-day table follows.

`AQINumber` and `AQIDetail` replace the old `InteractiveHero` component. `InteractiveHero` is kept for any other pages that reference it.

---

## AQI health levels

| AQI     | Level                       | Advice                             |
| ------- | --------------------------- | ---------------------------------- |
| 0–50    | Сайн                        | Safe to go outside                 |
| 51–100  | Дунд зэрэг                  | Sensitive groups should be careful |
| 101–150 | Мэдрэмтгий бүлэгт эрүүл бус | Wear masks, keep children inside   |
| 151–200 | Эрүүл бус                   | Use HEPA filters, close windows    |
| 201–300 | Маш эрүүл бус               | Avoid going outside                |
| 300+    | Аюултай                     | DO NOT GO OUTSIDE                  |

---

## Environment variables

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_WAQI_TOKEN=your_waqi_token
NEXT_PUBLIC_OPENWEATHER_KEY=your_openweather_key
```

---

## Setup

```bash
npm install
npm run dev
```

---

Made with love for Ulaanbaatar.
