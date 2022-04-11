import React, { useContext } from "react"
import GameWindow from "./GameWindow"
import { GameContext } from "../../context/GameContext"
import { PreGameScreen } from "../PreGameSection/PreGameScreen"
import { LobbyScreen } from "../LobbySection/LobbyScreen"
import { GuessSection } from "../GuessSection/GuessSection"

export function GameScreen() {
  const {
    isGameStarted,
    drawer,
    isPreScreen,
    player,
    players,
    isWinnerScreen,
    winner
  } = useContext(GameContext)

  if (players.length === 0) return <div>Waiting for players...</div>
  if (!player) return <div> Player null</div>
  if (isWinnerScreen)
    return (
      <div>
        {" "}
        Winner screen here{" "}
        {winner.map(({ id, points }, index) => (
          <div key={index}>
            <p>
              winner {id} : {points}
            </p>
          </div>
        ))}
      </div>
    )

  // const { id, username, isReady } = player

  return (
    <>
      {isGameStarted ? (
        !isPreScreen ? (
          <>
            <GameWindow />
            <GuessSection />
          </>
        ) : (
          <PreGameScreen />
        )
      ) : (
        <LobbyScreen />
      )}
    </>
  )
}
