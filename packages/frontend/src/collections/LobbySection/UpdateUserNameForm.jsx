import React from "react"
import styled from "styled-components"
import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import SaveIcon from "../../assets/save.svg"
import { Button } from "../../components/Button"

const Input = styled.input`
  border: 2px #868d96 solid;
  border-radius: 10px;
  padding: 1em;
  text-align: left;
  width: 70%;
  flex-wrap: wrap;
`
const InputLabel = styled.label`
  font-weight: bold;
  margin: 1em 0;
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

const UpdateUserNameForm = () => {
  const [username, setUsername] = React.useState("")
  const { updatePlayer, player } = useContext(GameContext)

  const handleChangeOnName = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePlayer("username", username)
  }

  return (
    <InputContainer>
      <InputLabel>Nickname :</InputLabel>
      <NickNameForm onSubmit={handleSubmit}>
        <Input
          onChange={handleChangeOnName}
          type="name"
          placeholder={player.id}
        />
        <Button style={{ backgroundColor: "#F8CB02" }}>
          <img alt="save_icon" width="25px" src={SaveIcon} />
        </Button>
      </NickNameForm>
    </InputContainer>
  )
}
export default UpdateUserNameForm
