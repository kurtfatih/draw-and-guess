import React from "react"
import "./App.css"
import SocketProvider from "./context/SocketContext"
import GameContextProvider from "./context/GameContext"
import { GameScreen } from "./screens/GameScreen"
import { MainLayout } from "./components/Layout"

function App() {
  return (
    <MainLayout>
      <SocketProvider>
        <GameContextProvider>
          <GameScreen />
        </GameContextProvider>
      </SocketProvider>
    </MainLayout>
  )
}

export default App
