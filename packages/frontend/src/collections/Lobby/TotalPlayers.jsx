import * as React from "react"
import { NormalText } from "../../components/Typography"

export const TotalPlayers = ({ numberOfTotalPlayers }) => {
  return <NormalText isBold>Total Players : {numberOfTotalPlayers}</NormalText>
}
