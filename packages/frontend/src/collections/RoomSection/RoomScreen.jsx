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
  width: 25%;
  min-width: 300px;
`

const RoomRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
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
            id="top"
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <GameWindow />
          </div>
          <div
            id="bottom"
            style={{
              display: "flex",
              width: "60%",
              flexDirection: "column",
              height: "20%",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "1em",
              borderRadius: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
            }}
          >
            <GuessChat chatMessages={messages} />
            <GuessInputSection
              isDisabled={
                prevAnswer.current === answer.toLocaleLowerCase() ||
                !isShowGuessChat
              }
              handleSubmit={handleSubmit}
              handleGuessChange={handleGuessChange}
            />
          </div>
        </RoomRightContainer>

        <ProgressBar value={gameCountDownTimerValue} />
      </RoomContainer>
    </>
  )
}
