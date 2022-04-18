import React from "react"
import styled from "styled-components"
import { secondaryColor } from "../../constants/styles"
import { NormalText } from "../../components/Typography"

const ChatContainer = styled.div`
  overflow-y: auto;
  background-color: ${secondaryColor};
  color: #000;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  width: 100%;
  height: 50%;
  max-height: 100px;
  padding: 1em;
`

export function GuessChat({ chatMessages }) {
  return (
    <ChatContainer>
      {chatMessages
        .slice(0)
        .reverse()
        .map((value, index) => (
          <NormalText key={index} id="index">
            {value}
          </NormalText>
        ))}
    </ChatContainer>
  )
}
