import React from 'react'
import styled from 'styled-components'
import Month from '../month'

const DateAreaWrapper = styled.div`
  width: 25%;
  background: pink;
  float: left;
  height: 100vh;
  border-right: 1px solid #d9d9d9;
`

const DateArea: React.FC = () => {
  return (
    <DateAreaWrapper>
      <Month />
    </DateAreaWrapper>
  )
}

export default DateArea
