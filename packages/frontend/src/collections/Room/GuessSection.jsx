import React, { useContext } from "react"

import { NormalText } from "../../components/Typography"
import { GameContext } from "../../context/GameContext"

export function GuessSection() {
  const { player, players } = useContext(GameContext)

  return (
    <div>
      <NormalText isBold>Your points : {player.points} </NormalText>
      <NormalText>Points / Players :</NormalText>
      {players
        .filter(({ id }) => id !== player.id)
        .map((players) => (
          <div>
            <NormalText isBold>
              {players.points} /
              {players.username.length > 0
                ? players.username
                : players.id.substring(0, 10) + "..."}
            </NormalText>
          </div>
        ))}
    </div>
  )
}
