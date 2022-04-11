import React from "react"
import styled from "styled-components"
import { Button } from "../../components/Button"

const GuessInputSectionContainer = styled.div`
  margin: 1em;
`
const Input = styled.input`
  border: 2px #868d96 solid;
  background-color: #fff;
  border-radius: 10px;
  padding: 1em;
  text-align: left;
  flex-wrap: wrap;
  box-shadow: 0 0 0 3px #002043, 0 0 0 4px #7c92b0;
  &:focus {
    outline: none;
  }
`
const SendMessageForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
const SendButton = styled.button`
  padding: 1em;
  border: 0;
  background-color: ;
`
export function GuessInputSection({
  handleSubmit,
  handleGuessChange,
  value,
  isDisabled
}) {
  return (
    <GuessInputSectionContainer>
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
        <Button
          disabled={isDisabled}
          type="submit"
          style={{ backgroundColor: "#F8CB02", width: "200px" }}
        >
          Send
        </Button>
      </SendMessageForm>
    </GuessInputSectionContainer>
  )
}
