import React, { useContext } from "react"

import { NormalText } from "../../components/Typography"
import { GameContext } from "../../context/GameContext"

export function GuessSection() {
  const { player, players } = useContext(GameContext)

  return (
    <div>
      <NormalText>Points / Players</NormalText>
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

// <GuessContainer>
//   <ChatInputContainer>
//     <GuessChat chatMessages={messages} />
//     {/* <GuessValue value={currentAnswer} /> */}
//     {drawer.id !== player.id && (
//       <GuessInputSection
//         isDisabled={prevAnswer.current === answer.toLocaleLowerCase()}
//         handleSubmit={handleSubmit}
//         handleGuessChange={handleGuessChange}
//       />
//     )}
//     <div>Your point {player.points}</div>
//     <br />
//     <div>
//       {players
//         .filter(({ id }) => id !== player.id)
//         .map((players) => (
//           <div>
//             Others point {players.points}{" "}
//             {players.username.length > 0 ? players.username : players.id}
//           </div>
//         ))}
//     </div>
//   </ChatInputContainer>
// </GuessContainer>
