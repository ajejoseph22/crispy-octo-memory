import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h3`
  margin: 10px 0;
  text-align: center;
  //position: fixed;
`

const DaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDay = styled.div`
  width: 50px;
  background: #fff;
  text-align: center;
  border: solid 1px #d9d9d9;
  cursor: pointer;
`

const MonthContainer = styled.div`
  height: 30%;
  overflow-x: auto;
`

const Month: React.FC = () => {
  const noOfDays = 30
  return (
    <>
      <StyledHeader className="header">Jan</StyledHeader>
      <MonthContainer>
        <DaysWrapper>
          {[...Array(noOfDays).keys()].map((date) => (
            <StyledDay>{date + 1}</StyledDay>
          ))}
        </DaysWrapper>
      </MonthContainer>
    </>
  )
}

export default Month
