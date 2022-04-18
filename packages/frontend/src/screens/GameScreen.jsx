import React, { useContext } from "react"
import { GameContext } from "../context/GameContext"
import { PreGameScreen } from "./PreGameScreen"
import { LobbyScreen } from "./LobbyScreen"
import { RoomScreen } from "./RoomScreen"
import { WinnerScreen } from "./WinnerScreen"
import { NormalText } from "../components/Typography"

export function GameScreen() {
  const { isGameStarted, isPreScreen, player, players, isWinnerScreen } =
    useContext(GameContext)

  if (player.id.length === 0)
    return <NormalText isDanger>Connecting...</NormalText>
  if (players.length === 1)
    return <NormalText isDanger>Waiting for players...</NormalText>
  if (isWinnerScreen) return <WinnerScreen />

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
