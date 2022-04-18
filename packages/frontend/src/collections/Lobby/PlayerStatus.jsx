import * as React from "react"
import styled from "styled-components"
import { NormalText } from "../../components/Typography"

const PlayerStatusContainer = styled.div`
  display: flex;
  height: 20%;
  flex-direction: column;
  justify-content: space-between;
`
export const PlayerStatus = ({ currentPlayerStatus, playerName }) => {
  return (
    <PlayerStatusContainer>
      <NormalText isBold isPrimary>
        Status :{currentPlayerStatus}
      </NormalText>
      <NormalText isBold isPrimary>
        You : {playerName}
      </NormalText>
    </PlayerStatusContainer>
  )
}
