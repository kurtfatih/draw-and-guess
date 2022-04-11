import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import UpdateUserNameForm from "./UpdateUserNameForm"

export const LobbyScreen = () => {
  const { player, updatePlayer, players } = useContext(GameContext)
  const totalPlayers = players.length
  const playerName = player?.username
    ? player.username.length > 0
      ? player.username
      : player.id
    : player.id

  const otherPlayers = players
    .filter(({ id }) => id !== player.id)
    .map(({ id, username, isReady }, index) => (
      <div key={index}>
        <p>
          {username ? (username.length > 0 ? username : id) : id} /
          {isReady ? "Ready" : "Not Ready"}
        </p>
      </div>
    ))

  return (
    <>
      <div>Total Players : {totalPlayers}</div>
      <br />
      <div>
        <div>
          You : {playerName}
          <button
            onClick={() =>
              player.isReady
                ? updatePlayer("isReady", false)
                : updatePlayer("isReady", true)
            }
          >
            {player.isReady ? "Not Ready" : "Ready"}
          </button>
          <p>Status :{player.isReady ? "Ready" : "Not Ready"}</p>
        </div>
      </div>
      <br />
      <UpdateUserNameForm />
      <br />
      {otherPlayers.length > 0 ? (
        <div> Other players: {otherPlayers} </div>
      ) : null}
    </>
  )
}
