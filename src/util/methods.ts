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

function getAbsoluteValue(monthNumber: number): number {
  if (monthNumber < 0) {
    return 12 + monthNumber
  }

  if (monthNumber > 11) {
    return monthNumber - 12
  }

  return monthNumber
}

export function addMonthsToTop(arrayOfMonthNumbers: number[]): number[] {
  const start = arrayOfMonthNumbers[0]

  const newStart = start - 3

  for (let i = start - 1; i >= newStart; i -= 1) {
    arrayOfMonthNumbers.unshift(getAbsoluteValue(i))
  }

  return arrayOfMonthNumbers
}

export function addMonthsToBottom(arrayOfMonthNumbers: number[]): number[] {
  const start = arrayOfMonthNumbers[arrayOfMonthNumbers.length - 1]

  const newStart = start + 3

  for (let i = start + 1; i <= newStart; i += 1) {
    arrayOfMonthNumbers.push(getAbsoluteValue(i))
  }

  return arrayOfMonthNumbers
}
