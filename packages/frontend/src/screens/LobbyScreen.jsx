import React from "react"
import { GameContext } from "../context/GameContext"
import { LobbySection } from "../sections/Lobby/LobbySection"

export const LobbyScreen = () => {
  const { player, players } = React.useContext(GameContext)
  const playerId = player.id
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
  const currentPlayerStatus = isPlayerReady ? "Ready" : "Not Ready"
  const isShowOtherPlayers = otherPlayers.length > 0

  return (
    <LobbySection
      isShowOtherPlayers={isShowOtherPlayers}
      numberOfPlayersThatIsReady={numberOfPlayersThatIsReady}
      numberOfTotalPlayers={numberOfTotalPlayers}
      otherPlayers={otherPlayers}
      currentPlayerStatus={currentPlayerStatus}
      playerId={playerId}
      playerName={playerName}
      isPlayerReady={isPlayerReady}
    />
  )
}
