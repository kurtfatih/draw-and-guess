import React from "react"
import styled from "styled-components"
import { Button } from "../../components/Button"

const Input = styled.input`
  width: 60%;
  border: 0;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5em;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  &:focus {
    outline: none;
  }
`
const SendMessageForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 20%;
`
export function GuessChatForm({
  handleSubmit,
  handleGuessChange,
  value,
  isDisabled
}) {
  return (
    <SendMessageForm onSubmit={handleSubmit}>
      <Input
        disabled={isDisabled}
        value={value}
        onChange={(e) => {
          handleGuessChange(e.target.value)
        }}
        placeholder="Guess answer here..."
        type="text"
      />
    </SendMessageForm>
  )
}
