// eslint-disable-next-line import/prefer-default-export
export function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate()
}
