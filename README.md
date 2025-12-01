# 🌍 Улаанбаатар LIVE - Air Quality Monitor

Real-time air quality monitoring dashboard for Ulaanbaatar, Mongolia. Track AQI, PM2.5, PM10, temperature, and weather conditions in a beautiful, responsive interface.

## ✨ Features

- 🌡️ **Real-time AQI Data** - Live air quality index from WAQI
- 🌤️ **Weather Information** - Current temperature, wind speed, and conditions
- 📱 **Responsive Design** - Works perfectly on mobile and desktop
- 🇲🇳 **Mongolian Language** - Full support with Noto Sans Mongolian font
- 🎨 **Visual Health Indicators** - Color-coded AQI levels with health advice
- ⚡ **Auto-refresh** - Data updates every 2 minutes
- 📞 **Emergency Access** - Quick dial 103 for emergencies

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- API keys (see below)

### API Keys Required

1. **WAQI Token** - Get from [aqicn.org/data-platform/token](https://aqicn.org/data-platform/token/)
2. **OpenWeather API Key** - Get from [openweathermap.org/api](https://openweathermap.org/api)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ulaanbaatar

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Add your API keys to .env.local
NEXT_PUBLIC_WAQI_TOKEN=your_waqi_token_here
NEXT_PUBLIC_OPENWEATHER_KEY=your_openweather_key_here

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
Ulaanbaatar/
├── app/
│   ├── favicon.ico
│   ├── globals.css       # Tailwind v4 + custom theme
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Main dashboard page
├── components/
│   ├── GiantAQI.tsx      # Large AQI display component
│   └── Header.tsx        # Top navigation bar
├── lib/
│   ├── constants.ts      # Health messages & UI text
│   ├── fetchAQI.ts       # WAQI API integration
│   └── fetchWeather.ts   # OpenWeather API integration
├── types/
│   └── index.ts          # TypeScript interfaces
├── .env.local            # API keys (DO NOT COMMIT)
└── package.json
```

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Noto Sans Mongolian, Inter
- **APIs**: WAQI (Air Quality), OpenWeather (Weather)

## 🔧 Configuration

### Tailwind v4 Theme

Custom colors are defined in `globals.css` using the new `@theme` directive:

```css
@theme {
  --color-golden: #ffc107;
  --color-aqi-good: #10b981;
  --color-aqi-moderate: #ffc107;
  /* ... more colors */
}
```

### AQI Health Levels

| AQI Range | Level                       | Color    | Advice                             |
| --------- | --------------------------- | -------- | ---------------------------------- |
| 0-50      | Сайн                        | Green    | Safe to go outside                 |
| 51-100    | Хүлээн зөвшөөрөгдөх         | Golden   | Sensitive groups should be careful |
| 101-150   | Мэдрэмтгий бүлэгт эрүүл бус | Orange   | Wear masks, keep children inside   |
| 151-200   | Эрүүл бус                   | Red      | Use HEPA filters, close windows    |
| 201-300   | Маш эрүүл бус               | Purple   | Avoid going outside                |
| 300+      | Аюултай                     | Dark Red | DO NOT GO OUTSIDE                  |

## 🔒 Security

- Never commit `.env.local` to version control
- Regenerate API keys if accidentally exposed
- Use environment variables for all sensitive data

## 📝 License

MIT License - feel free to use this project for your own city!

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Made with ❤️ for the people of Ulaanbaatar
