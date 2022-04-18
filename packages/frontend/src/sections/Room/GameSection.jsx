import React, { useContext } from "react"
import styled from "styled-components"
import { GuessChatForm } from "../../collections/Forms/GuessForm"
import GameWindow from "../../collections/Room/GameWindow"
import { GuessChat } from "../../collections/Room/GuessChat"
import { GuessSection } from "../../collections/Room/GuessSection"
import { NormalText } from "../../components/Typography"
import { ProgressBar } from "../../components/ProgressBar"
import { GameContext } from "../../context/GameContext"

export const GameSection = () => {
  const {
    sendAnswer,
    player,
    drawer,
    answer,
    messages,
    gameCountDownTimerValue
  } = useContext(GameContext)
  const [chatInput, setChatInput] = React.useState("")
  const prevAnswer = React.useRef("")

  const handleGuessChange = (value) => {
    setChatInput(value)
  }
  const handleGuessChangeSubmit = (e) => {
    e.preventDefault()
    prevAnswer.current = chatInput.toLocaleLowerCase()
    sendAnswer(chatInput)
  }

  const isChatDisabled =
    player.id === drawer.id ||
    prevAnswer.current.toLowerCase() === answer.toLocaleLowerCase()

  return (
    <RoomContainer id="room-container">
      <RoomLeftContainer id="room-left">
        <GuessSection />
      </RoomLeftContainer>
      <RoomRightContainer id="room-right">
        <RoomCanvasContainer id="room-canvas-container">
          <GameWindow />
        </RoomCanvasContainer>
        <RoomRightBottomContainer id="room-right-bottom">
          <NormalText style={{ fontSize: "0.8rem" }}>Chat:</NormalText>
          <GuessChat chatMessages={messages} />
          <GuessChatForm
            handleSubmit={handleGuessChangeSubmit}
            handleGuessChange={handleGuessChange}
            isDisabled={isChatDisabled}
            value={chatInput}
          />
        </RoomRightBottomContainer>
      </RoomRightContainer>
      <ProgressBar value={gameCountDownTimerValue} />
    </RoomContainer>
  )
}

const RoomContainer = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  justify-content: space-between;
`

const RoomLeftContainer = styled.div`
  background-color: #fff;
  padding: 1em;
  border: 1px solid black;
  width: 20%;
  height: 100%;
  max-height: 100%;
  overflowy: auto;
  border-radius: 10px;
  min-width: 200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`

const RoomRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
  height: 100%;
`
const RoomCanvasContainer = styled.div`
  display: flex;
  height: 75%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1em;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  justify-content: center;
  align-items: center;
`
const RoomRightBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 22%;
  border: 1px solid black;
  padding: 1em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`
