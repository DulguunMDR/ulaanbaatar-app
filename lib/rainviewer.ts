// lib/rainviewer.ts
// RainViewer API - Бороо/цасны radar (Rain/snow radar - completely free)

export interface RainViewerResponse {
  version: string;
  generated: number;
  host: string;
  radar: {
    past: RainViewerFrame[];
    nowcast: RainViewerFrame[];
  };
  satellite: {
    infrared: RainViewerFrame[];
  };
}

export interface RainViewerFrame {
  time: number; // Unix timestamp
  path: string; // Tile path
}

/**
 * RainViewer API-аас сүүлийн бороо/цасны radar өгөгдлийг авах
 * Get latest rain/snow radar data from RainViewer API
 * Үнэгүй, API түлхүүр шаардлагагүй (Free, no API key required)
 */
export async function fetchRainViewerData(): Promise<RainViewerResponse | null> {
  try {
    const response = await fetch(
      "https://api.rainviewer.com/public/weather-maps.json",
      {
        next: { revalidate: 600 }, // 10 минут бүр шинэчлэх (Revalidate every 10 minutes)
      }
    );

    if (!response.ok) {
      console.error("RainViewer API алдаа:", response.status);
      return null;
    }

    const data: RainViewerResponse = await response.json();
    return data;
  } catch (error) {
    console.error("RainViewer fetch алдаа:", error);
    return null;
  }
}

/**
 * RainViewer tile URL үүсгэх (Generate RainViewer tile URL)
 * @param host - API host
 * @param path - Frame path
 * @param size - Tile size (256 or 512)
 * @param color - Color scheme (0-8)
 * @param smooth - Smooth edges (0 or 1)
 * @param snow - Show snow (0 or 1)
 */
export function getRainViewerTileUrl(
  host: string,
  path: string,
  size = 256,
  color = 1,
  smooth = 1,
  snow = 1
): string {
  return `https://${host}${path}/${size}/{z}/{x}/{y}/${color}/${smooth}_${snow}.png`;
}

/**
 * Хамгийн сүүлийн radar frame авах (Get latest radar frame)
 */
export function getLatestRadarFrame(
  data: RainViewerResponse
): RainViewerFrame | null {
  const frames = data.radar.past;
  return frames.length > 0 ? frames[frames.length - 1] : null;
}
