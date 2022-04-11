import * as React from "react"

export const ProgressBar = ({ value }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "5px",
        position: "fixed",
        left: 0,
        top: 0
      }}
    >
      <span
        style={{
          background: "red",
          height: "5px",
          width: `${value}%`,
          border: "5px solid black",
          borderRadius: "10px"
        }}
      ></span>
    </div>
  )
}
