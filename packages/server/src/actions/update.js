import players from "../db/players.js"

const playerUpdate = (playerId, key, value) => {
  const playerIndex = players.findIndex(({ id }) => id === playerId)
  players[playerIndex][key] = value
}
export { playerUpdate }
