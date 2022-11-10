import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface DProps {
  hasMemory: boolean
  expression: string
  value: string
}

const StyledIndicator = styled.div`
  font-size: 0.75em;
  line-height: 1;
  opacity: 0.4;
  text-align: right;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25em;
  min-height: 1em;
`

const StyledExpression = styled.span`
  margin-left: auto;
`

const StyleScreen = styled.div`
  font-size: 2.5em;
  min-height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  overflow: hidden;
`

const StyledDisplay = styled.div`
  background-color: #393939;
  color: #fff;
  padding: 1.5em 1em;
`

export const Screen: FunctionComponent<DProps> = ({value, hasMemory, expression}) => {

  return (
    <StyledDisplay>
      <StyledIndicator>
        {hasMemory &&
          <span>M</span>
        }

        <StyledExpression>
          {expression}
        </StyledExpression>
      </StyledIndicator>

      <StyleScreen>
        {value}
      </StyleScreen>
    </StyledDisplay>
  )
}

export default Screen