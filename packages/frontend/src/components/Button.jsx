import * as React from "react"
import styled from "styled-components"

const ButtonContainer = styled.button`
  border: 0;
  padding: 1em;
  background-color: #BDE5A4;
  border-radius: 10px;
  font-weight: bold;
  border-top-width: 1px;
  border-bottom-width: 1px;
  box-shadow: 0 0 0 3px #002043, 0 0 0 4px #7c92b0;
  cursor:pointer;
}
`
export const Button = (props) => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>
}
