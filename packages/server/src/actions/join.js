import players from "../db/players.js"

const playerJoin = (playerId) => {
  players.push(playerId)
}
export { playerJoin }
