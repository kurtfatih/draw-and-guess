import React, { useContext } from "react"
import { GameContext } from "../context/GameContext"
import { LobbyScreen } from "./LobbyScreen"
import { RoomScreen } from "./RoomScreen"
import { NormalText } from "../components/Typography"

export function GameScreen() {
  const { isGameStarted, player, players } = useContext(GameContext)

  if (player.id.length === 0)
    return <NormalText isDanger>Connecting...</NormalText>
  if (players.length === 1)
    return <NormalText isDanger>Waiting for players...</NormalText>

  return <>{isGameStarted ? <RoomScreen /> : <LobbyScreen />}</>
}
