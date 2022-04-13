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

export const LobbyScreen = () => {
  const [username, setUsername] = React.useState("")

  const { player, updatePlayer, players } = useContext(GameContext)
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

  const handleChangeOnUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleUserNameSubmit = (e) => {
    e.preventDefault()
    updatePlayer("username", username)
  }

  const handleReady = () => {
    if (isPlayerReady) {
      return updatePlayer("isReady", false)
    }
    return updatePlayer("isReady", true)
  }

  const isShowOtherPlayers = otherPlayers.length > 0

  return (
    <LobbyContainer>
      <LobbyWrapper isOtherPlayersExists={players.length > 1}>
        <TotalPlayers numberOfTotalPlayers={numberOfTotalPlayers} />
        <LobbyBodyContainer>
          <PlayerStatus status={status} playerName={playerName} />
          <LobbyInput
            handleChangeOnUsername={handleChangeOnUsername}
            handleUserNameSubmit={handleUserNameSubmit}
            handleReady={handleReady}
            isPlayerReady={isPlayerReady}
            playerId={player.id}
            status={status}
          />
        </LobbyBodyContainer>
        {isShowOtherPlayers && (
          <>
            <OtherPlayers otherPlayers={otherPlayers} />
            <ReadyPlayers
              numberOfPlayersThatIsReady={numberOfPlayersThatIsReady}
            />
          </>
        )}
      </LobbyWrapper>
    </LobbyContainer>
  )
}
