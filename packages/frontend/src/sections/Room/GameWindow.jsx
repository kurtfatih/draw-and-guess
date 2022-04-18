import React, { useContext } from "react"

import { usePlayer } from "../../hooks/usePlayer"
import { GameContext } from "../../context/GameContext"
export const GAME_WINDOW_WIDTH = 600
export const GAME_WINDOW_HEIGHT = 500
const GameWindow = () => {
  const [ctx, setCtx] = React.useState()

  const { drawer, player, activeSocket } = useContext(GameContext)

  const gameWindowRef = React.useRef()
  const [startStopDraw, draw] = usePlayer(activeSocket, ctx)

  React.useEffect(() => {
    if (!gameWindowRef.current) return
    setCtx(gameWindowRef.current.getContext("2d"))
  }, [])

  return (
    <canvas
      ref={gameWindowRef}
      onMouseMove={(e) => (player.id !== drawer.id ? null : draw(e))}
      onMouseDownCapture={(e) =>
        player.id !== drawer.id ? null : startStopDraw(e)
      }
      id="game-screen-canvas"
      width={GAME_WINDOW_WIDTH}
      height={GAME_WINDOW_HEIGHT}
      style={{
        border: "5px solid #000",
        width: GAME_WINDOW_WIDTH,
        objectFit: "contain",
        height: GAME_WINDOW_HEIGHT,
        backgroundColor: "white"
      }}
    />
  )
}
export default GameWindow
