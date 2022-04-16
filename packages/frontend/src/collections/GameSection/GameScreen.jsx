import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { PreGameScreen } from "../PreGameSection/PreGameScreen"
import { LobbyScreen } from "../LobbySection/LobbyScreen"
import { RoomScreen } from "../RoomSection/RoomScreen"
import { WinnerScreen } from "../WinnerSection/WinnerScreen"
import { NormalText } from "../../components/Typography"

export function GameScreen() {
  const { isGameStarted, isPreScreen, player, players, isWinnerScreen } =
    useContext(GameContext)

  if (player.id.length === 0)
    return <NormalText isDanger>Connecting...</NormalText>
  if (players.length === 1)
    return <NormalText isDanger>Waiting for players...</NormalText>
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
}
