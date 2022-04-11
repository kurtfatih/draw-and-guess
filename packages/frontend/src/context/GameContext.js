import React, { createContext, useContext, useEffect } from "react"

import {
  PLAYER_JOINED,
  PLAYER_LEAVED,
  pictionaryWordsArr,
  GAME_TIMER,
  GAME_SET_ANSWER,
  GAME_SEND_ANSWER,
  PLAYER_SET,
  GAME_STOP,
  GAME_START,
  GAME_NEXT_ROUND
} from "@draw-and-guess/common"

import { generateRandomNumber } from "../utils/generateRandomNumber"
import { sleep } from "../utils/sleep"
import { SocketContext } from "./SocketContext"

export const GameContext = createContext()

const GameContextProvider = ({ children }) => {
  const { activeSocket } = useContext(SocketContext)
  const [drawer, setDrawer] = React.useState("")

  const [answer, setAnswer] = React.useState("")

  const [players, setPlayers] = React.useState([])
  const [messages, setMessages] = React.useState([])
  const [player, setPlayer] = React.useState({
    id: "",
    username: "",
    isReady: false
  })

  const [isPreScreen, setIsPreScreen] = React.useState(false)
  const [isWinnerScreen, setIsWinnerScreen] = React.useState(false)
  const [winner, setWinner] = React.useState([])
  const [isGameStarted, setIsGameStarted] = React.useState(false)
  const [gameCountDownTimerValue, setGameCountDownTimerValue] =
    React.useState(0)

  const activeTurnCount = React.useRef(0)
  const activeInterval = React.useRef()
  // console.log("drawer", drawer)

  const givePoint = () => {
    return updatePlayer("points", player.points + 10)
  }

  const decideAnswerValue = React.useCallback(() => {
    if (players[activeTurnCount.current].id === player.id) {
      const random = generateRandomNumber(pictionaryWordsArr.length)
      activeSocket.emit(GAME_SET_ANSWER, random)
    }
  }, [activeSocket, player, players])

  const sendAnswer = (currentAnswer) => {
    activeSocket.emit(GAME_SEND_ANSWER, currentAnswer)
    const correctAnswer = answer.toLowerCase()
    const playerAnswer = currentAnswer.toLowerCase()

    if (playerAnswer === correctAnswer) {
      givePoint()
    }
  }

  const updatePlayer = React.useCallback(
    (key, value) => {
      activeSocket.emit(PLAYER_SET, key, value)
    },
    [activeSocket]
  )

  const pickDrawer = React.useCallback(() => {
    const nextDrawer = players[activeTurnCount.current]
    setDrawer(nextDrawer)
  }, [players])

  const decideWinner = React.useCallback(() => {
    const getTheHighestPointsThatPlayersAchived = Math.max(
      ...players.map(({ points }) => points)
    )
    if (getTheHighestPointsThatPlayersAchived === 0) return

    const thePlayersThatAchievedHighestPoints = players.filter(
      ({ points }) => points === getTheHighestPointsThatPlayersAchived
    )

    thePlayersThatAchievedHighestPoints.map(({ username, id, points }) =>
      setWinner((prevState) => [
        ...prevState,
        { id: username.length > 0 ? username : id, points }
      ])
    )
  }, [players])

  const stopGame = React.useCallback(() => {
    clearInterval(activeInterval.current)
    activeSocket.emit(GAME_STOP)
    decideWinner()
    setIsWinnerScreen(true)

    sleep(5000).then(() => {
      setIsPreScreen(false)
      updatePlayer("isReady", false)
      sleep(5000).then(() => {
        setIsGameStarted(false)
      })
      sleep(5000).then(() => {
        setIsWinnerScreen(false)
        setWinner([])
      })
    })
  }, [activeSocket, decideWinner, updatePlayer])

  const initGame = React.useCallback(() => {
    pickDrawer()
    if (!isGameStarted) {
      activeSocket.emit(GAME_START)
      setIsGameStarted(true)
    }
    activeSocket.emit(GAME_NEXT_ROUND)

    setIsPreScreen(true)
    decideAnswerValue()

    sleep(5000).then(() => {
      setIsPreScreen(false)
      setGameCountDownTimerValue(GAME_TIMER)
    })
  }, [activeSocket, decideAnswerValue, isGameStarted, pickDrawer])

  useEffect(() => {
    if (!activeSocket) return
    activeSocket.emit(PLAYER_JOINED)
    return () => {
      if (!activeSocket) return
      activeSocket.emit(PLAYER_LEAVED)
    }
  }, [activeSocket])

  // game first init
  useEffect(() => {
    if (players.length === 0) return
    const isAllPlayerReady =
      players.filter(({ isReady }) => isReady === true).length ===
        players.length && players.length > 1
    if (isAllPlayerReady && !isGameStarted && !isWinnerScreen && !isPreScreen) {
      initGame()
    }
  }, [initGame, isGameStarted, isPreScreen, isWinnerScreen, players])

  // player set
  useEffect(() => {
    if (!activeSocket) return
    if (players.length === 0) return
    const player = players.filter(({ id }) => id === activeSocket.id)[0]
    setPlayer(player)
  }, [activeSocket, players])

  // player joined
  useEffect(() => {
    if (!activeSocket) return
    const getPlayers = (allPlayers) => {
      setPlayers(allPlayers)
    }
    activeSocket.on(PLAYER_JOINED, getPlayers)
    return () => {
      activeSocket.off(PLAYER_JOINED, getPlayers)
    }
  }, [activeSocket, players])

  // set game answer
  useEffect(() => {
    if (!activeSocket) return
    const getAnswer = (currentAnswer) => {
      setAnswer(currentAnswer)
    }

    activeSocket.on(GAME_SET_ANSWER, getAnswer)
    return () => {
      activeSocket.off(GAME_SET_ANSWER, getAnswer)
    }
  }, [activeSocket])

  // player leaved
  useEffect(() => {
    if (!activeSocket) return
    const playerDisconnected = (playerId) => {
      const discardPlayer = players.filter(({ id }) => id !== playerId)
      setPlayers(discardPlayer)
      if (discardPlayer.length === 1 && isGameStarted) {
        stopGame()
      }
    }
    activeSocket.on(PLAYER_LEAVED, playerDisconnected)
    return () => {
      activeSocket.off(PLAYER_LEAVED, playerDisconnected)
    }
  }, [activeSocket, isGameStarted, players, stopGame])

  // update user
  useEffect(() => {
    if (!activeSocket) return
    const update = (playerId, key, value) => {
      const playerWillBeUpdatedIndex = players.findIndex(
        ({ id }) => id === playerId
      )
      const newArr = [...players]
      newArr[playerWillBeUpdatedIndex][key] = value
      setPlayers(newArr)
    }
    activeSocket.on(PLAYER_SET, update)

    return () => {
      activeSocket.off(PLAYER_SET, update)
    }
  }, [activeSocket, players])

  // chat section

  useEffect(() => {
    if (!activeSocket) return
    const getAnswer = (playerAnswer) => {
      if (playerAnswer.toLowerCase() !== answer.toLowerCase()) {
        setMessages((prevState) => [...prevState, playerAnswer])
      }
    }

    activeSocket.on(GAME_SEND_ANSWER, getAnswer)

    return () => {
      activeSocket.off(GAME_SEND_ANSWER, getAnswer)
    }
  }, [activeSocket, answer, messages, players])

  // game loop
  useEffect(() => {
    if (!isGameStarted || isPreScreen || isWinnerScreen) return
    const intervalId = setInterval(() => {
      if (gameCountDownTimerValue !== 0) {
        setGameCountDownTimerValue((prevState) => prevState - 1)
      }
      if (gameCountDownTimerValue === 0) {
        if (activeTurnCount.current === players.length - 1) {
          return stopGame()
        }
        // activeTurnCount.current += 1
        // initGame()
      }
    }, 1000)
    activeInterval.current = intervalId
    return () => clearInterval(intervalId)
  }, [
    gameCountDownTimerValue,
    initGame,
    isGameStarted,
    isPreScreen,
    isWinnerScreen,
    players.length,
    stopGame
  ])

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        gameCountDownTimerValue,
        stopGame,
        players,
        player,
        updatePlayer,
        isWinnerScreen,
        drawer,
        isPreScreen,
        activeSocket,
        sendAnswer,
        messages,
        answer,
        winner
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
export default GameContextProvider
