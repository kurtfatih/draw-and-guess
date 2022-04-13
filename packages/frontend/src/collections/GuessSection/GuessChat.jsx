import React, { useContext } from "react"
import styled from "styled-components"
import { secondaryColor } from "../../constants/styles"
import { NormalText } from "../../components/Typography"

const ChatContainer = styled.div`
  max-height: 200px;
  height: 10%;
  overflow-y: auto;
  background-color: ${secondaryColor};
  color: #000;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  z-index: 999;
  padding: 1em;
`
export function GuessChat({ chatMessages }) {
  return (
    <>
      <ChatContainer>
        <NormalText>Chat:</NormalText>
        {chatMessages
          .slice(0)
          .reverse()
          .map((value, index) => (
            <div key={index}>
              <p id="index">{value}</p>
            </div>
          ))}
      </ChatContainer>
    </>
  )
}
