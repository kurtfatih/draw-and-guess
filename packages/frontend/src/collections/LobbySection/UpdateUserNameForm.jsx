import React from "react"
import { useContext } from "react"
import { GameContext } from "../../context/GameContext"

const UpdateUserNameForm = () => {
  const [username, setUsername] = React.useState("")
  const { updatePlayer } = useContext(GameContext)

  const handleChangeOnName = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePlayer("username", username)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeOnName}
          type="name"
          placeholder="your name..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
export default UpdateUserNameForm
