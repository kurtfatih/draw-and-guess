import * as React from "react"
import styled from "styled-components"
import { NormalText } from "../../components/Typography"

const LobbyTotalPlayersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`
export const TotalPlayers = ({ numberOfTotalPlayers }) => {
  return (
    <LobbyTotalPlayersContainer>
      <NormalText isBold>Total Players : {numberOfTotalPlayers}</NormalText>
    </LobbyTotalPlayersContainer>
  )
}
