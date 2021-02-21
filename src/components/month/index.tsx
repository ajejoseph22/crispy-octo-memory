import React, { Ref } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const StyledHeader = styled.h3`
  margin: 5% 0;
  text-align: center;
  //position: fixed;
`

const DaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;
  width: fit-content;
  height: 90%;
  margin: auto;
`

const StyledDay = styled.div`
  width: 50px;
  background: #fff;
  text-align: center;
  border: solid 1px #d9d9d9;
  cursor: pointer;
`

const MonthContainer = styled.div`
  height: 40%;
`

const Month: React.FC<{ month: number; innerRef: Ref<HTMLDivElement> }> = ({
  month,
  innerRef,
}) => {
  const noOfDays = 30
  return (
    <MonthContainer className="month-container" ref={innerRef}>
      <StyledHeader className="header">
        {moment.monthsShort(month)}
      </StyledHeader>

      <DaysWrapper className="days-wrapper">
        {[...Array(noOfDays).keys()].map((date) => (
          <StyledDay key={date}>{date + 1}</StyledDay>
        ))}
      </DaysWrapper>
    </MonthContainer>
  )
}

export default Month
