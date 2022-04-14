import * as React from "react"

export const ProgressBar = ({ value }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "10px",
        position: "fixed",
        left: 0,
        top: 0,
        justifyContent: "center"
      }}
    >
      <span
        style={{
          height: "9px",
          border: "2px solid #000",
          borderRadius: "10px",
          width: `${value}%`,
          backgroundColor: "#f30"
        }}
      ></span>
    </div>
  )
}
