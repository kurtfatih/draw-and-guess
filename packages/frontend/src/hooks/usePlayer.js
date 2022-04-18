import {
  GAME_DRAW,
  GAME_NEXT_ROUND,
  GAME_START_DRAW
} from "@draw-and-guess/common"

import React from "react"
import {
  GAME_WINDOW_HEIGHT,
  GAME_WINDOW_WIDTH
} from "../sections/Room/GameWindow"

export function usePlayer(playerAction, ctx) {
  const [isDrawing, setIsDrawing] = React.useState(false)

  const draw = (e) => {
    if (!isDrawing) return
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY
    playerAction.emit(GAME_DRAW, {
      x,
      y
    })
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const startStopDraw = (e) => {
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineWidth = 3

    if (!isDrawing) {
      playerAction.emit(GAME_START_DRAW, {
        startX: x,
        startY: y
      })
    }
    setIsDrawing(!isDrawing)
  }

  React.useEffect(() => {
    if (!playerAction) return
    playerAction.on(GAME_START_DRAW, ({ startX, startY }) => {
      if (!ctx) return
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(startX, startY)
    })

    return () => {
      playerAction.off(GAME_START_DRAW)
    }
  }, [ctx, playerAction])

  React.useEffect(() => {
    if (!playerAction) return
    playerAction.on(GAME_DRAW, ({ x, y }) => {
      if (!ctx) return
      ctx.lineTo(x, y)
      ctx.stroke()
    })
    return () => {
      playerAction.off(GAME_DRAW)
    }
  }, [ctx, playerAction])

  React.useEffect(() => {
    if (!playerAction) return
    playerAction.on(GAME_NEXT_ROUND, () => {
      if (!ctx) return
      ctx.beginPath()
      ctx.clearRect(0, 0, GAME_WINDOW_WIDTH, GAME_WINDOW_HEIGHT)
    })

    return () => {
      playerAction.off(GAME_NEXT_ROUND)
    }
  }, [ctx, playerAction])

  return [startStopDraw, draw]
}
