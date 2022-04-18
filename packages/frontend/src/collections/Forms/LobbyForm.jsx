import React, { useContext } from "react"
import styled from "styled-components"
import { Button } from "../../components/Button"
import SaveIcon from "../../assets/save.svg"
import { GameContext } from "../../context/GameContext"

const Input = styled.input`
  border: 2px #868d96 solid;
  border-radius: 10px;
  padding: 1em;
  text-align: left;
  width: 70%;
  flex-wrap: wrap;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
`
const NickNameForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SaveButtonContainer = styled.div`
  width: 20%;
  align-self: center;
  margin: 1em;
`

const ReadyButtonContainer = styled.div`
  width: 60%;
  align-self: center;
`

export const LobbyForm = ({ isPlayerReady, playerId }) => {
  const [username, setUsername] = React.useState("")
  const { updatePlayer } = useContext(GameContext)
  const handleChangeOnUsername = (e) => {
    setUsername(e.target.value)
  }
  const handleUserNameSubmit = (e) => {
    e.preventDefault()
    updatePlayer("username", username)
  }
  const handleReady = () => {
    if (isPlayerReady) {
      return updatePlayer("isReady", false)
    }
    return updatePlayer("isReady", true)
  }
  const buttonStatusText = isPlayerReady ? "Not Ready" : "Ready"

  return (
    <InputContainer>
      <NickNameForm onSubmit={handleUserNameSubmit}>
        <Input
          onChange={handleChangeOnUsername}
          type="name"
          placeholder={playerId}
        />
        <SaveButtonContainer>
          <Button style={{ backgroundColor: "#F8CB02" }}>
            <img alt="save_icon" width="25px" src={SaveIcon} />
          </Button>
        </SaveButtonContainer>
      </NickNameForm>
      <ReadyButtonContainer>
        <Button
          isSuccess={!isPlayerReady}
          isDanger={isPlayerReady}
          onClick={handleReady}
        >
          {buttonStatusText}
        </Button>
      </ReadyButtonContainer>
    </InputContainer>
  )
}
