/**
 * @param date
 * @returns {string} date in format 'YYYY-MM-DD'
 */
export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour12: false,
  }).format(date);
