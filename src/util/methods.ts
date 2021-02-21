export function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate()
}

export function getRangeOfMonthsFromMiddle(middle: number): number[] {
  const start = middle - 3
  const end = middle + 3
  const range = []
  for (let i = start; i <= end; i += 1) {
    if (i < 0) {
      range.push(12 + i)
    } else if (i < 11) {
      range.push(i)
    } else {
      range.push(12 - i)
    }
  }

  return range
}
