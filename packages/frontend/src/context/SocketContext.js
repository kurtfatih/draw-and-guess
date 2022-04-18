import React, { createContext, useEffect } from "react"
import { io } from "socket.io-client"
import { isProduction } from "../utils/isProduction"

export const SocketContext = createContext()

console.log("debug", isProduction, process.env.SERVER_URL)
const SocketProvider = ({ children }) => {
  const [activeSocket, setActiveSocket] = React.useState()

  useEffect(() => {
    const socket = io(isProduction ? process.env.SERVER_URL : "localhost:8000")
    socket.on("connect", () => {
      setActiveSocket(socket)
    })

    return () => {
      socket.off("connect")
    }
  }, [])

  return (
    <SocketContext.Provider value={{ activeSocket }}>
      {children}
    </SocketContext.Provider>
  )
}
export default SocketProvider
