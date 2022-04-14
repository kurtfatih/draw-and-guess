import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import styled from "styled-components"
import { LargeText, NormalText } from "../../components/Typography"
const WinnerScreenContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  width: 30%;
  max-height: 400px;
  overflow-y: auto;
  align-items: center;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  flex-direction: column;
`
export const WinnerScreen = () => {
  const { winner } = useContext(GameContext)
  return (
    <WinnerScreenContainer>
      <div>
        <NormalText isPrimary>-Winner(s)-</NormalText>
      </div>
      <div>
        {winner.map(({ id, points }, index) => (
          <div style={{ padding: "1em" }} key={index}>
            <LargeText isBold>
              {id} : {points} Points
            </LargeText>
          </div>
        ))}
      </div>
    </WinnerScreenContainer>
  )
}
