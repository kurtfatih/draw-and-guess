import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"

export const WinnerScreen = () => {
  const { winner } = useContext(GameContext)
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
}
