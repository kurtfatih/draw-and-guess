import * as React from "react"

const MainLayout = ({ children }) => {
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
      {children}
    </main>
  )
}

export { MainLayout }
