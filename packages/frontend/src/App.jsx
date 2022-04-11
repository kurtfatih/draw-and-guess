import React from "react"
import "./App.css"
import SocketProvider from "./context/SocketContext"
import { GameScreen } from "./collections/GameSection/GameScreen"
import { Card, CardItem } from "./components/Card"
import GameContextProvider from "./context/GameContext"

function App() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        backgroundColor: "#085EFB"
      }}
      id="container"
    >
      <SocketProvider>
        <GameContextProvider>
          <GameScreen />
        </GameContextProvider>
      </SocketProvider>
    </main>
  )
}

export default App
