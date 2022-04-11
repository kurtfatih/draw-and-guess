import players from "../db/players.js"

const playerDisconnect = (playerId) => {
  const playerIndex = players.findIndex(({ id }) => id === playerId)
  if (playerIndex === -1) {
    return
  }
  return players.splice(playerIndex, 1)
}
export { playerDisconnect }
