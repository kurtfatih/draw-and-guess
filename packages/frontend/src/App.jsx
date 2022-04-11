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
        minHeight: "100vh",
        alignItems: "center",
        backgroundColor: "#085EFB"
      }}
      id="container"
    >
      <SocketProvider>
        <Card id="card-container">
          <CardItem>
            <GameContextProvider>
              <GameScreen />
            </GameContextProvider>
          </CardItem>
        </Card>
      </SocketProvider>
    </main>
  )
}

export default App
