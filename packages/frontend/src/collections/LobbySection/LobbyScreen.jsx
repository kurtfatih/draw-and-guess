import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import styled from "styled-components"
import { TotalPlayers } from "./TotalPlayers"
import { PlayerStatus } from "./PlayerStatus"
import { LobbyInput } from "./LobbyInput"
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
    props.isOtherPlayersExists ? "space-between" : "center"};
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

export const LobbyScreen = () => {
  const { player, players } = useContext(GameContext)
  const playerName = player?.username
    ? player.username.length > 0
      ? player.username
      : player.id
    : player.id

  const isPlayerReady = player.isReady
  const numberOfTotalPlayers = players.length
  const otherPlayers = players.filter(({ id }) => id !== player.id)
  const numberOfPlayersThatIsReady = players.filter(
    ({ isReady }) => isReady === true
  ).length
  const status = isPlayerReady ? "Ready" : "Not Ready"
  const isShowOtherPlayers = otherPlayers.length > 0

  return (
    <LobbyContainer>
      <LobbyWrapper isOtherPlayersExists={players.length > 1}>
        <LobbyTotalPlayersContainer>
          <TotalPlayers numberOfTotalPlayers={numberOfTotalPlayers} />
        </LobbyTotalPlayersContainer>
        <LobbyBodyContainer>
          <PlayerStatus status={status} playerName={playerName} />
          <LobbyInput isPlayerReady={isPlayerReady} playerId={player.id} />
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
