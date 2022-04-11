import { playerJoin } from "../actions/join.js"
import { getPlayers } from "../actions/getPlayers.js"
import { playerDisconnect } from "../actions/disconnect.js"
import { playerUpdate } from "../actions/update.js"
import {
  PLAYER_JOINED,
  PLAYER_LEAVED,
  PLAYER_SET
} from "@draw-and-guess/common"

export const playerController = Object.freeze({
  playerJoined: (playerId, io) => {
    const newPlayer = {
      id: playerId,
      username: "",
      isReady: false,
      points: 0
    }
    playerJoin(newPlayer)
    const players = getPlayers()
    io.to("lobby").emit(PLAYER_JOINED, players)
  },
  playerLeaved: (playerId, io) => {
    playerDisconnect(playerId)
    io.emit(PLAYER_LEAVED, playerId)
  },
  playerUpdate: (key, value, playerId, io) => {
    playerUpdate(playerId, key, value)
    io.emit(PLAYER_SET, playerId, key, value)
  }
})
