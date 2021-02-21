import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Month from '../month'
import { getRangeOfMonths } from '../../util/methods'

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
  const [isAtTop, setIsAtTop] = useState<boolean>(false)
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)
  const [months, setMonths] = useState<number[]>(
    getRangeOfMonths(startingMonth - 3, startingMonth + 3)
  )
  const monthRefs = React.useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (monthRefs.current[startingMonth]) {
      monthRefs.current[startingMonth].scrollIntoView()
    }
  }, [startingMonth])

  const handleOnScroll = (e: React.UIEvent<HTMLElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight * 1.2

    const top =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop >=
      e.currentTarget.scrollHeight * 0.9

    if (bottom) {
      console.log('Bottom')
      setIsAtBottom(true)
      // load more months into state
    } else {
      setIsAtBottom(false)
    }

    if (top) {
      console.log('Top')
      setIsAtTop(true)
      // load more months into state
    } else {
      setIsAtTop(false)
    }
  }

  return (
    <DateAreaWrapper onScroll={handleOnScroll}>
      {months.map((month) => (
        <Month
          innerRef={(el: HTMLDivElement): void => {
            monthRefs.current[month] = el
          }}
          month={month}
          key={month}
        />
      ))}
    </DateAreaWrapper>
  )
}

export default DateArea
