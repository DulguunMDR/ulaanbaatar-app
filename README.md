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
| **Journal**             | Personal entries — observations from living in UB                                |
| **Road Violation Map**  | Citizen-reported traffic violations on a live map                                |

---

## Design Language

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
- Journal entries are personal and written in first person

---

## Data Sources

| Data                | Source     | Revalidation | Notes                                                   |
| ------------------- | ---------- | ------------ | ------------------------------------------------------- |
| AQI (city-level)    | WAQI API   | 2 min        | `/feed/ulaanbaatar/` — used in header + AQINumber       |
| AQI (station-level) | WAQI API   | on-demand    | Per-station fetch in AQIDetail — differs from city feed |
| Weather forecast    | Open-Meteo | 1 hour       | No API key required                                     |
| Precipitation radar | RainViewer | on-demand    | Loaded only when layer is toggled                       |
| Regional wind       | Open-Meteo | on-demand    | Loaded only when layer is toggled                       |

**Header vs weather page:** The header shows city-level WAQI data and Open-Meteo temperature — both fetched in `layout.tsx`. The weather page shows the same city-level AQI in `AQINumber`, then offers station-level drill-down in `AQIDetail`. Station readings may differ from the city aggregate; this is labeled explicitly in the UI.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display, Inter, Noto Sans (Cyrillic)
- **Air quality:** WAQI API
- **Weather:** Open-Meteo API
- **Database:** Supabase (PostgreSQL)
- **Map:** Leaflet.js + OpenStreetMap

---

## Project Structure

```
ulaanbaatar/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   ├── forecast/route.ts
│   │   ├── historical/route.ts
│   │   └── historical-pollution/route.ts
│   ├── journal/
│   │   └── page.tsx
│   ├── map/
│   │   └── page.tsx
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
│   │   ├── AQINumber.tsx       ← city-level AQI display (top of weather page)
│   │   ├── AQIDetail.tsx       ← station-level drill-down (below map)
│   │   ├── InsightsDashboard.tsx
│   │   └── InteractiveHero.tsx ← legacy, kept for other pages
│   ├── map/
│   │   ├── AQIMap.tsx
│   │   ├── AQIMapWrapper.tsx
│   │   └── WeatherLayerControls.tsx
│   ├── terms/
│   ├── weather/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Menu.tsx
│   └── ViolationMap.tsx
├── content/
│   └── journal/
│       ├── 2026-04-25.ts
│       └── index.ts
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

## Weather Page Structure

The weather page follows a deliberate information hierarchy — from universal and quick to specific and deep:

```
1. Page label
2. OpenMeteoForecast       ← temperature, rain, wind (everyone)
3. AQINumber               ← city-level AQI at a glance (matches header)
4. AQIMapWrapper           ← spatial context for the AQI reading
5. AQIDetail               ← station drill-down: pollutants + station selector
6. InsightsDashboard       ← historical trends (power users)
```

`AQINumber` and `AQIDetail` replace the old `InteractiveHero` component. `InteractiveHero` is kept for any other pages that reference it.

---

## Files to Create

| File                       | Status          | Priority                             |
| -------------------------- | --------------- | ------------------------------------ |
| `app/sacred/page.tsx`      | ❌ Not built    | High — most distinctive content      |
| `app/museums/page.tsx`     | ❌ Not built    | High                                 |
| `app/journal/page.tsx`     | ❌ Not built    | High — gives site its personal voice |
| `content/journal/index.ts` | ❌ Not built    | Required for journal page            |
| `components/Menu.tsx`      | ⚠️ Needs update | Add links to new pages               |
| `components/Footer.tsx`    | ⚠️ Needs update | Add links to new pages               |

---

## Environment Variables

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

Run the Supabase SQL migration in your project's SQL editor before using the violation map (`/supabase/schema.sql`).

---

## AQI Health Levels

| AQI     | Level                       | Advice                             |
| ------- | --------------------------- | ---------------------------------- |
| 0–50    | Сайн                        | Safe to go outside                 |
| 51–100  | Дунд зэрэг                  | Sensitive groups should be careful |
| 101–150 | Мэдрэмтгий бүлэгт эрүүл бус | Wear masks, keep children inside   |
| 151–200 | Эрүүл бус                   | Use HEPA filters, close windows    |
| 201–300 | Маш эрүүл бус               | Avoid going outside                |
| 300+    | Аюултай                     | DO NOT GO OUTSIDE                  |

---

Made with love for Ulaanbaatar.
