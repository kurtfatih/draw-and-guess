import * as React from "react"
import { NormalText } from "../../components/Typography"

export const PlayerStatus = ({ status, playerName }) => {
  return (
    <div>
      <NormalText isBold isPrimary>
        Status :{status}
      </NormalText>
      <NormalText isBold isPrimary>
        You : {playerName}
      </NormalText>
    </div>
  )
}
