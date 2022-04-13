import * as React from "react"
import GameWindow from "../GameSection/GameWindow"
import { GuessSection } from "../GuessSection/GuessSection"
import { GuessInputSection } from "../GuessSection/GuessInputSection"
import styled from "styled-components"
import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { ProgressBar } from "../../components/ProgressBar"
import { GuessChat } from "../GuessSection/GuessChat"

const RoomContainer = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  border-radius: 10px;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
`
const RoomLeftContainer = styled.div`
  width: 20%;
  min-width: 300px;
`

const RoomRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  justify-content: space-between;
`

export const RoomScreen = () => {
  const {
    gameCountDownTimerValue,
    messages,
    sendAnswer,
    player,
    drawer,
    answer
  } = useContext(GameContext)
  const isShowGuessChat = player.id !== drawer.id

  const prevAnswer = React.useRef("")

  const [value, setValue] = React.useState("")

  const handleGuessChange = (value) => {
    setValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    prevAnswer.current = value.toLocaleLowerCase()
    sendAnswer(value)
  }

  return (
    <>
      <RoomContainer>
        <RoomLeftContainer id="left">
          <GuessSection />
        </RoomLeftContainer>
        <RoomRightContainer id="right">
          <div
            style={{
              height: "70%",
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
            }}
          >
            {/* <GameWindow /> */}
          </div>
          <GuessChat chatMessages={messages} />
          <GuessInputSection
            isDisabled={
              prevAnswer.current === answer.toLocaleLowerCase() ||
              !isShowGuessChat
            }
            handleSubmit={handleSubmit}
            handleGuessChange={handleGuessChange}
          />
        </RoomRightContainer>

        <ProgressBar value={gameCountDownTimerValue} />
      </RoomContainer>
    </>
  )
}
