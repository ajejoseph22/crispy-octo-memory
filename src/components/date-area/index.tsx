import React, { useEffect, useRef, useState } from 'react'
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
  const [months, setMonths] = useState<number[]>(
    getRangeOfMonths(startingMonth - 3, startingMonth + 3)
  )
  const monthRefs = React.useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (monthRefs.current[startingMonth]) {
      monthRefs.current[startingMonth].scrollIntoView()
    }
  }, [startingMonth])

  return (
    <DateAreaWrapper>
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
