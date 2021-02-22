import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Month from '../month'
import {
  addMonthsToBottom,
  addMonthsToTop,
  getRangeOfMonthsFromMiddle,
} from '../../util/methods'

const DateAreaWrapper = styled.div`
  width: 25%;
  background: pink;
  float: left;
  height: 100vh;
  border-right: 1px solid #d9d9d9;
  overflow-x: auto;
`

const DateArea: React.FC = () => {
  const [startingMonth, setStartingMonth] = useState<number>(
    new Date().getMonth()
  )
  const [months, setMonths] = useState<number[]>(
    getRangeOfMonthsFromMiddle(startingMonth)
  )
  const monthRefs = React.useRef<HTMLDivElement[]>([])
  const dateAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (monthRefs.current[startingMonth]) {
      monthRefs.current[startingMonth].scrollIntoView()
    }
  }, [startingMonth])

  const handleOnScroll = (e: React.UIEvent<HTMLElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight * 1.2

    if (bottom) {
      // load more months into state
      setMonths(addMonthsToBottom([...months]))
    }
    // if element is at top
    else if (dateAreaRef.current && dateAreaRef.current.scrollTop < 1) {
      // load more months into state
      setMonths(addMonthsToTop([...months]))
      // adjust the scroll position
      dateAreaRef.current.scrollBy(0, dateAreaRef.current.clientHeight * 1.2)
    }
  }
  // load more months into state

  return (
    <DateAreaWrapper ref={dateAreaRef} onScroll={handleOnScroll}>
      {months.map((month, index) => (
        <Month
          innerRef={(el: HTMLDivElement): void => {
            monthRefs.current[month] = el
          }}
          month={month}
          // key={month}
        />
      ))}
    </DateAreaWrapper>
  )
}

export default DateArea
