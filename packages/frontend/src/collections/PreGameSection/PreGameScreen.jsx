import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"

export const PreGameScreen = () => {
  const { player, drawer, answer } = useContext(GameContext)
  const isDrawer = player.id === drawer.id
  const nextDrawer =
    drawer.username || drawer.username.lenght > 0 ? drawer.username : drawer.id

  return (
    <>
      {isDrawer ? (
        <div>
          You will draw "{answer.toUpperCase()}" next round start in 5
          second....
        </div>
      ) : (
        <div>
          Next drawer will be {nextDrawer} next round start in 5 second...
        </div>
      )}
    </>
  )
}
