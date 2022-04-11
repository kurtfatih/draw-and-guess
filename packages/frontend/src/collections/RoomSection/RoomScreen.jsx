import * as React from "react"
import GameWindow from "../GameSection/GameWindow"
import { GuessSection } from "../GuessSection/GuessSection"
import styled from "styled-components"
import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { ProgressBar } from "../../components/ProgressBar"
import { GuessChat } from "../GuessSection/GuessChat"
import { GuessInputSection } from "../GuessSection/GuessInputSection"

const RoomContainer = styled.div`
  display: flex;
  background-color: #fff;
  padding: 1em;
  border-radius: 10px;
  width: 60%;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`
const RoomBodyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`
export const RoomScreen = () => {
  const {
    gameCountDownTimerValue,
    drawer,
    player,
    answer,
    messages,
    sendAnswer
  } = useContext(GameContext)

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
    <RoomContainer>
      <RoomBodyWrapper>
        <GameWindow />
        <GuessSection />
      </RoomBodyWrapper>
      {drawer.id !== player.id && (
        <GuessInputSection
          isDisabled={prevAnswer.current === answer.toLocaleLowerCase()}
          handleSubmit={handleSubmit}
          handleGuessChange={handleGuessChange}
        />
      )}
      <GuessChat chatMessages={messages} />
      <ProgressBar value={gameCountDownTimerValue} />
    </RoomContainer>
  )
}
