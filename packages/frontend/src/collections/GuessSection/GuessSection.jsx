import React, { useContext } from "react"
import { GuessChat } from "./GuessChat"

import { GameContext } from "../../context/GameContext"
import { GuessInputSection } from "./GuessInputSection"
import { ChatInputContainer, ChatContainer } from "../../components/Chat"

export function GuessSection() {
  const { sendAnswer, messages, answer, drawer, player, players } =
    useContext(GameContext)
  const prevAnswer = React.useRef("")

  const [value, setValue] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    prevAnswer.current = value.toLocaleLowerCase()
    sendAnswer(value)
  }

  const handleGuessChange = (value) => {
    setValue(value)
  }

  return (
    <ChatContainer>
      <ChatInputContainer>
        <GuessChat chatMessages={messages} />
        {/* <GuessValue value={currentAnswer} /> */}
        {drawer.id !== player.id && (
          <GuessInputSection
            isDisabled={prevAnswer.current === answer.toLocaleLowerCase()}
            handleSubmit={handleSubmit}
            handleGuessChange={handleGuessChange}
          />
        )}
        <div>Your point {player.points}</div>
        <br />
        <div>
          {players
            .filter(({ id }) => id !== player.id)
            .map((players) => (
              <div>
                Others point {players.points}{" "}
                {players.username.length > 0 ? players.username : players.id}
              </div>
            ))}
        </div>
      </ChatInputContainer>
    </ChatContainer>
  )
}
