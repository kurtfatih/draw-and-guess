import { Server } from "socket.io"
import express from "express"
import http from "http"

import { playerController } from "./controllers/player.js"
import { gameController } from "./controllers/game.js"
import {
  GAME_DRAW,
  GAME_NEXT_ROUND,
  GAME_SEND_ANSWER,
  GAME_SET_ANSWER,
  GAME_START,
  GAME_START_DRAW,
  GAME_STOP,
  PLAYER_JOINED,
  PLAYER_LEAVED,
  PLAYER_SET
} from "@draw-and-guess/common"

const app = express()
const port = 8000
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

const main = async () => {
  app.get("/", (_, res) => {
    res.send("hey")
  })

  io.on("connection", (socket) => {
    // socket init
    socket.join("lobby")

    // player
    socket.on(PLAYER_JOINED, () => playerController.playerJoined(socket.id, io))

    socket.on(PLAYER_LEAVED, () => playerController.playerLeaved(socket.id, io))

    socket.on(PLAYER_SET, (key, value) => {
      playerController.playerUpdate(key, value, socket.id, io)
    })

    socket.on("disconnect", () => console.log("user disconnected", socket.id))

    socket.on("disconnecting", () =>
      playerController.playerLeaved(socket.id, io)
    )

    // game settings

    socket.on(GAME_START, () => gameController.startGame(io))

    socket.on(GAME_STOP, () => gameController.stopGame(io))

    socket.on(GAME_DRAW, (cordinates) => {
      gameController.draw(socket, cordinates)
    })
    socket.on(GAME_NEXT_ROUND, () => gameController.nextRound(io))
    socket.on(GAME_START_DRAW, (cordinates) => {
      gameController.startDraw(socket, cordinates)
    })

    socket.on(GAME_SEND_ANSWER, (answer) => {
      gameController.sendAnswer(answer, io)
    })

    socket.on(GAME_SET_ANSWER, (randomNumber) => {
      gameController.setAnswer(randomNumber, io)
    })
  })

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

main()
