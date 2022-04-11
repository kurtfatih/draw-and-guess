import React from "react"

export function GuessChat({ chatMessages }) {
  return (
    <div>
      {chatMessages.map((value, index) => (
        <div key={index}>
          <p id="index">{value}</p>
        </div>
      ))}
    </div>
  )
}
