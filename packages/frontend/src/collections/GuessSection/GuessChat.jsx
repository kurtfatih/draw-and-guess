import React from "react"
import styled from "styled-components"

const ChatContainer = styled.div`
  max-height: 50px;
  overflow-y: auto;
  background-color: gray;
  color: white;
  padding: 0.2em;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`
export function GuessChat({ chatMessages }) {
  return (
    <ChatContainer>
      {chatMessages
        .slice(0)
        .reverse()
        .map((value, index) => (
          <div key={index}>
            <p id="index">{value}</p>
          </div>
        ))}
    </ChatContainer>
  )
}
