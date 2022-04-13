import * as React from "react"
import styled from "styled-components"
import { NormalText } from "../../components/Typography"

const OtherPlayersContainer = styled.div`
  align-self: flex-start;
  max-height: 200px;
  overflow-y: auto;
  margin: 1em;
`

export const OtherPlayers = ({ otherPlayers }) => {
  const otherPlayersInfo = otherPlayers.map(
    ({ id, username, isReady }, index) => (
      <div id="other-players" key={index}>
        <NormalText isBold={!isReady} isDanger={!isReady}>
          {username ? (username.length > 0 ? username : id) : id} /
          {isReady ? "Ready" : "Not Ready"}
        </NormalText>
      </div>
    )
  )
  return (
    <OtherPlayersContainer>
      <NormalText isBold>Other players / Status</NormalText>
      {otherPlayersInfo}
    </OtherPlayersContainer>
  )
}
