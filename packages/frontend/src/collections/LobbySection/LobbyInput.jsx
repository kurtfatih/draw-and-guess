import React, { useContext } from "react"
import styled from "styled-components"
import { NormalText } from "../../components/Typography"
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
  justify-content: center;
`
const NickNameForm = styled.form`
  display: flex;
  justify-content: space-between;
`

export const LobbyInput = ({ isPlayerReady, status, playerId }) => {
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

  return (
    <InputContainer>
      <NormalText>Nickname :</NormalText>
      <NickNameForm onSubmit={handleUserNameSubmit}>
        <Input
          onChange={handleChangeOnUsername}
          type="name"
          placeholder={playerId}
        />
        <Button style={{ backgroundColor: "#F8CB02" }}>
          <img alt="save_icon" width="25px" src={SaveIcon} />
        </Button>
      </NickNameForm>
      <Button
        isSuccess={!isPlayerReady}
        isDanger={isPlayerReady}
        onClick={handleReady}
      >
        {status}
      </Button>
    </InputContainer>
  )
}
