// lib/mongolianDate.ts
// Монгол хэл дээрх огноо, гарагийн нэр (Mongolian date and weekday names)

/**
 * Гарагийн товчилсон нэр (Short weekday abbreviation - 2 letters)
 * Жишээ: "Да", "Мя", "Лх", ...
 */
export function getShortWeekdayMn(date: Date): string {
  const dayIndex = date.getDay(); // 0 = Sunday, 1 = Monday, ...

  const weekdays = [
    "Ня", // Sunday (Ням)
    "Да", // Monday (Даваа)
    "Мя", // Tuesday (Мягмар)
    "Лх", // Wednesday (Лхагва)
    "Пү", // Thursday (Пүрэв)
    "Ба", // Friday (Баасан)
    "Бя", // Saturday (Бямба)
  ];

  return weekdays[dayIndex];
}

/**
 * Гарагийн бүтэн нэр (Full weekday name)
 * Жишээ: "Даваа", "Мягмар", "Лхагва", ...
 */
export function getFullWeekdayMn(date: Date): string {
  const dayIndex = date.getDay();

  const weekdays = [
    "Ням", // Sunday
    "Даваа", // Monday
    "Мягмар", // Tuesday
    "Лхагва", // Wednesday
    "Пүрэв", // Thursday
    "Баасан", // Friday
    "Бямба", // Saturday
  ];

  return weekdays[dayIndex];
}

/**
 * Сарын нэр монголоор (Mongolian month names)
 * Жишээ: "1-р сар", "2-р сар", ...
 */
export function getMonthNameMn(date: Date): string {
  const monthIndex = date.getMonth() + 1; // 0-indexed, so add 1
  return `${monthIndex}-р сар`;
}

/**
 * Огноо форматлах: "12/03" хэлбэрээр (Format date as MM/DD)
 */
export function formatDateShort(date: Date): string {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}/${day}`;
}

/**
 * Огноо форматлах: "2025 оны 12-р сарын 3" хэлбэрээр
 * (Format date as "2025 оны 12-р сарын 3")
 */
export function formatDateLongMn(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year} оны ${month}-р сарын ${day}`;
}
