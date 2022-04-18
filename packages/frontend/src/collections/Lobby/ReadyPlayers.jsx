import * as React from "react"
import styled from "styled-components"
import { NormalText } from "../../components/Typography"

const ReadyPlayersContainer = styled.div`
  align-self: end;
`

export const ReadyPlayers = ({ numberOfPlayersThatIsReady }) => {
  return (
    <ReadyPlayersContainer>
      <NormalText isBold>
        Ready players: {numberOfPlayersThatIsReady}
      </NormalText>
    </ReadyPlayersContainer>
  )
}
