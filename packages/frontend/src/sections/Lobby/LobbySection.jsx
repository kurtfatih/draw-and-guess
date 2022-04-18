import * as React from "react"
import styled from "styled-components"

import { TotalPlayers } from "./TotalPlayers"
import { PlayerStatus } from "./PlayerStatus"
import { LobbyForm } from "../../collections/Forms/LobbyForm"
import { OtherPlayers } from "./OtherPlayers"
import { ReadyPlayers } from "./ReadyPlayers"

const LobbyContainer = styled.div`
  display: flex;
  width: 75%;
  height: 60%;
  background-color: #fff;
  border-radius: 1em;
  padding: 3em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`

const LobbyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: ${(props) =>
    props.isShowOtherPlayers ? "space-between" : "center"};
  align-items: center;
`

const LobbyBodyContainer = styled.div`
  display: flex;
  height: 50%;
  width: 60%;
  justify-content: space-between;
  flex-direction: column;
`

const LobbyBottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  min-height: 20%;
  justify-content: space-between;
`

const LobbyTotalPlayersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  height: 5%;
`

export const LobbySection = ({
  numberOfTotalPlayers,
  currentPlayerStatus,
  playerName,
  playerId,
  isShowOtherPlayers,
  isPlayerReady,
  otherPlayers,
  numberOfPlayersThatIsReady
}) => {
  return (
    <LobbyContainer>
      <LobbyWrapper isShowOtherPlayers={isShowOtherPlayers}>
        <LobbyTotalPlayersContainer>
          <TotalPlayers numberOfTotalPlayers={numberOfTotalPlayers} />
        </LobbyTotalPlayersContainer>
        <LobbyBodyContainer>
          <PlayerStatus
            currentPlayerStatus={currentPlayerStatus}
            playerName={playerName}
          />
          <LobbyForm isPlayerReady={isPlayerReady} playerId={playerId} />
        </LobbyBodyContainer>
        {isShowOtherPlayers && (
          <LobbyBottomContainer>
            <OtherPlayers otherPlayers={otherPlayers} />
            <ReadyPlayers
              numberOfPlayersThatIsReady={numberOfPlayersThatIsReady}
            />
          </LobbyBottomContainer>
        )}
      </LobbyWrapper>
    </LobbyContainer>
  )
}
