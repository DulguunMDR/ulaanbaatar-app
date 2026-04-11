# 🌍 Улаанбаатар LIVE - Air Quality & Road Safety Monitor

Real-time air quality monitoring and citizen road safety reporting for Ulaanbaatar, Mongolia. Track AQI, PM2.5, PM10, temperature, and weather conditions — and report traffic violations directly on a live map. "www.ulaanbaatar.app"

## ✨ Features

- 🌡️ **Real-time AQI Data** - Live air quality index from WAQI
- 🌤️ **Weather Information** - Current temperature, wind speed, and conditions
- 🗺️ **Road Violation Map** - Citizen-reported traffic violations on a live Ulaanbaatar map
- 📸 **Photo Reporting** - Submit violations with photo, GPS location, and category
- 👥 **Community Upvoting** - Confirm reports submitted by other citizens
- 📱 **Responsive Design** - Works perfectly on mobile and desktop
- 🇲🇳 **Mongolian Language** - Full support with Noto Sans Mongolian font

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Noto Sans Mongolian, Inter
- **Database**: Supabase (PostgreSQL) — open source, no vendor lock-in
- **Map**: Leaflet.js + OpenStreetMap — fully free

## 🚦 Road Violation Categories

| Category                    | Description                          |
| --------------------------- | ------------------------------------ |
| 🚗 Явган замд зогссон       | Parked on pedestrian sidewalk        |
| 🛵 Мотоцикл явган замд      | Motorcycle riding on pedestrian path |
| 🚌 Автобусны зогсоол хаасан | Blocking a bus stop                  |
| 🚶 Гарц дээр зогссон        | Blocking a pedestrian crossing       |
| 🚦 Гэрэлт дохио зөрчсөн     | Traffic light violation              |
| ⚠️ Бусад зөрчил             | Other violations                     |

### AQI Health Levels

| AQI Range | Level                       | Color    | Advice                             |
| --------- | --------------------------- | -------- | ---------------------------------- |
| 0-50      | Сайн                        | Green    | Safe to go outside                 |
| 51-100    | Хүлээн зөвшөөрөгдөх         | Golden   | Sensitive groups should be careful |
| 101-150   | Мэдрэмтгий бүлэгт эрүүл бус | Orange   | Wear masks, keep children inside   |
| 151-200   | Эрүүл бус                   | Red      | Use HEPA filters, close windows    |
| 201-300   | Маш эрүүл бус               | Purple   | Avoid going outside                |
| 300+      | Аюултай                     | Dark Red | DO NOT GO OUTSIDE                  |

## 🛠️ Setup

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create `.env.local`:
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_WAQI_TOKEN=your_waqi_token
   NEXT_PUBLIC_OPENWEATHER_KEY=...

3. Run the Supabase SQL migration in your project's SQL editor (see `/supabase/schema.sql`)

4. Start the dev server:

```bash
npm run dev
```

## 📝 License

MIT License - feel free to use this project for your own city!

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

## 📁 Project Structure

> To regenerate this tree, run in PowerShell from the project root:
>
> ```powershell
> Get-ChildItem -Recurse -Exclude @("node_modules", ".next", ".git") | Where-Object { $_.FullName -notmatch "node_modules|\.next|\.git" } | Select-Object FullName | ForEach-Object { $_.FullName.Replace((Get-Location).Path + "\", "") }
> ```

```
ulaanbaatar/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   ├── forecast/
│   │   │   └── route.ts
│   │   ├── historical/
│   │   │   └── route.ts
│   │   └── historical-pollution/
│   │       └── route.ts
│   ├── map/
│   │   └── page.tsx
│   ├── passivhaus/
│   │   ├── airtightness/
│   │   │   └── page.tsx
│   │   ├── construction/
│   │   │   └── page.tsx
│   │   ├── heating/
│   │   │   └── page.tsx
│   │   ├── insulation/
│   │   │   └── page.tsx
│   │   ├── introduction/
│   │   │   └── page.tsx
│   │   ├── materials/
│   │   │   └── page.tsx
│   │   ├── ventilation/
│   │   │   └── page.tsx
│   │   ├── windows/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── weather/
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── charts/
│   │   ├── AQITrendChart.tsx
│   │   ├── BestWorstTimes.tsx
│   │   ├── PollutionHeatmap.tsx
│   │   ├── SeasonalComparison.tsx
│   │   ├── TodayInHistoryCard.tsx
│   │   ├── WeeklyComparison.tsx
│   │   └── YearComparisonChart.tsx
│   ├── home/
│   │   ├── InsightsDashboard.tsx
│   │   └── InteractiveHero.tsx
│   ├── map/
│   │   ├── AQIMap.tsx
│   │   ├── AQIMapWrapper.tsx
│   │   └── WeatherLayerControls.tsx
│   ├── terms/
│   │   ├── AQISection.tsx
│   │   ├── COSection.tsx
│   │   ├── FeelsLikeSection.tsx
│   │   ├── HumiditySection.tsx
│   │   ├── NO2Section.tsx
│   │   ├── OzoneSection.tsx
│   │   ├── PM10Section.tsx
│   │   ├── PM25Section.tsx
│   │   ├── SO2Section.tsx
│   │   ├── TemperatureSection.tsx
│   │   └── WindSpeedSection.tsx
│   ├── weather/
│   │   ├── CurrentWeather.tsx
│   │   ├── ForecastCards.tsx
│   │   ├── OpenMeteoForecast.tsx
│   │   └── WeatherImpact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Menu.tsx
│   └── ViolationMap.tsx
├── lib/
│   ├── constants.ts
│   ├── fetchAQI.ts
│   ├── fetchForecast.ts
│   ├── fetchHistoricalAQI.ts
│   ├── fetchHistoricalPollution.ts
│   ├── fetchOpenMeteo.ts
│   ├── fetchStations.ts
│   ├── fetchWeather.ts
│   ├── mongolianDate.ts
│   ├── pollutantInfo.ts
│   ├── rainviewer.ts
│   ├── supabase.ts
│   ├── weatherImpactAnalyzer.ts
│   └── windOverlay.ts
```

Made with ❤️ for the people of Ulaanbaatar
