import {
  GAME_NEXT_ROUND,
  GAME_SEND_ANSWER,
  GAME_SET_ANSWER,
  GAME_SET_TIMER,
  GAME_START_DRAW,
  pictionaryWordsArr
} from "@draw-and-guess/common"

export const gameController = Object.freeze({
  startGame: (io) => {
    io.in("lobby").socketsJoin("room1")
    io.in("lobby").socketsLeave("lobby")
  },
  stopGame: (io) => {
    io.in("room1").socketsJoin("lobby")
    io.in("room1").socketsLeave("room1")
  },
  draw: (socket, cordinates) => {
    socket.broadcast.to("room1").emit("game:draw", cordinates)
  },
  nextRound: (io) => {
    io.in("room1").emit(GAME_NEXT_ROUND)
  },
  startDraw: (socket, cordinates) => {
    socket.broadcast.to("room1").emit(GAME_START_DRAW, cordinates)
  },
  setTimer: (time, io) => {
    io.to("room1").emit(GAME_SET_TIMER, time)
  },
  setAnswer: (randomNumber, io) => {
    const answer = pictionaryWordsArr[randomNumber]
    io.to("room1").emit(GAME_SET_ANSWER, answer)
  },
  sendAnswer: (answer, io) => {
    io.to("room1").emit(GAME_SEND_ANSWER, answer)
  }
})
