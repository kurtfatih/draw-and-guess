import styled from "styled-components"
import {
  dangerColor,
  primaryColor,
  secondaryColor,
  successColor
} from "../constants/styles"

const DefaultText = styled.p`
  color: #000;
  color: ${(p) => p.isPrimary && primaryColor};
  color: ${(p) => p.isSecondary && secondaryColor};
  color: ${(p) => p.isSuccess && successColor};
  color: ${(p) => p.isDanger && dangerColor};
  font-weight: ${(p) => (p.isBold ? "bold" : "thin")};
`

const NormalText = styled(DefaultText)`
  font-size: 1rem;
`

const LargeText = styled(DefaultText)`
  font-size: 2rem;
`

export { NormalText, LargeText }

// const PreGameScreenText = styled.p`
//   display: inline-block;
//   font-weight: thin;
//   color: #fff;
//   font-size: 1rem;
//   color: #000;
// `

// const PreGameScreenAnswerText = styled.p`
//   display: inline-block;
//   font-weight: bold;
//   margin: 0;
//   padding: 0;
//   color: #fff;
//   font-size: 2rem;
//   color: #000;
//   margin: 0 0.2em;
// `

// const InputLabel = styled.label`
//   font-weight: bold;
//   margin: 1em 0;
// `

// const LobbyTotalPlayerText = styled.p`
//   font-weight: bold;
// `

// const PlayerStatusText = styled.p`
//   color: #3679fc;
//   font-weight: bold;
// `
