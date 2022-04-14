import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { PreGameScreen } from "../PreGameSection/PreGameScreen"
import { LobbyScreen } from "../LobbySection/LobbyScreen"
import { RoomScreen } from "../RoomSection/RoomScreen"
import { WinnerScreen } from "../WinnerSection/WinnerScreen"

export function GameScreen() {
  const { isGameStarted, isPreScreen, player, players, isWinnerScreen } =
    useContext(GameContext)

  if (player.id.length === 0) return <div>Connecting...</div>
  if (players.length === 1) return <div>Waiting for players...</div>
  if (isWinnerScreen) return <WinnerScreen />

  // const { id, username, isReady } = player

  return (
    <>
      {isGameStarted ? (
        !isPreScreen ? (
          <RoomScreen />
        ) : (
          <PreGameScreen />
        )
      ) : (
        <LobbyScreen />
      )}
    </>
  )

  // return <RoomScreen />
}
