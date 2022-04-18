import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import styled from "styled-components"

export const PreGameSection = () => {
  const { player, drawer, answer } = useContext(GameContext)
  const isDrawer = player.id === drawer.id
  const nextDrawerUsername =
    drawer.username || drawer.username.lenght > 0
      ? drawer.username.toUpperCase()
      : drawer.id

  if (!answer || answer.length < 0) return null

  const upperCasedAnswer = answer.toUpperCase()

  const youWillDrawOrNextDrawerWillBeText = isDrawer
    ? `You will draw`
    : "Next drawer will be"

  const answerOrNextDrawerNameText = isDrawer
    ? upperCasedAnswer
    : nextDrawerUsername

  return (
    <PreGameScreenContainer>
      <div>
        <PreGameScreenText>
          {youWillDrawOrNextDrawerWillBeText}
          <PreGameScreenAnswerText>
            {answerOrNextDrawerNameText}
          </PreGameScreenAnswerText>
          next round start in 5 second...
        </PreGameScreenText>
      </div>
    </PreGameScreenContainer>
  )
}

const PreGameScreenContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  width: 80%;
  justify-content: center;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`
const PreGameScreenText = styled.p`
  display: inline-block;
  font-weight: thin;
  color: #fff;
  font-size: 1rem;
  color: #000;
`
const PreGameScreenAnswerText = styled.p`
  display: inline-block;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 2rem;
  color: #000;
  margin: 0 0.2em;
`
