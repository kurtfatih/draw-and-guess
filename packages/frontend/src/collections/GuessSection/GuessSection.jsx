import React, { useContext } from "react"

import styled from "styled-components"
import { GameContext } from "../../context/GameContext"

const GuessContainer = styled.div`
  display: flex;
  height: 85%;
  padding: 1em;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  overflow-y: auto;
`

const YourPointsText = styled.p`
  font-weight: bold;
`
const OtherPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`
export function GuessSection() {
  const { player, players } = useContext(GameContext)

  return (
    <GuessContainer id="guess-container">
      <YourPointsText>Your points : {player.points}</YourPointsText>
      <OtherPointsContainer>
        <p>Others points :</p>
        {players
          .filter(({ id }) => id !== player.id)
          .map((players) => (
            <YourPointsText>
              {players.points} /
              {players.username.length > 0 ? players.username : players.id}
            </YourPointsText>
          ))}
      </OtherPointsContainer>
    </GuessContainer>
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
