import React from "react"

export function GuessInputSection({
  handleSubmit,
  handleGuessChange,
  value,
  isDisabled
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        disabled={isDisabled}
        value={value}
        onChange={(e) => {
          handleGuessChange(e.target.value)
        }}
        type="text"
      />
      <button disabled={isDisabled} type="submit">
        Submit
      </button>
    </form>
  )
}
