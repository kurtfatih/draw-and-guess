import React, { useContext } from "react"

import { usePlayer } from "../../hooks/usePlayer"
import { GameContext } from "../../context/GameContext"
export const GAME_WINDOW_WIDTH = 600
export const GAME_WINDOW_HEIGHT = 600
const GameWindow = () => {
  const [ctx, setCtx] = React.useState()

  const { gameCountDownTimerValue, drawer, player, activeSocket } =
    useContext(GameContext)
  const [startStopDraw, draw] = usePlayer(activeSocket, ctx)

  const gameWindowRef = React.useRef()

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
        width: "600px",
        height: "600px"
      }}
    />
  )
}
export default GameWindow
