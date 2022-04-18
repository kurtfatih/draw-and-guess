import * as React from "react"
import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import { PreGameSection } from "../sections/Room/PreGameSection"
import { WinnerSection } from "../sections/Room/WinnerSection"
import { GameSection } from "../sections/Room/GameSection"

export const RoomScreen = () => {
  const { isWinnerScreen, isPreScreen } = useContext(GameContext)

  if (isWinnerScreen) return <WinnerSection />
  if (isPreScreen) return <PreGameSection />
  return <GameSection />
}
