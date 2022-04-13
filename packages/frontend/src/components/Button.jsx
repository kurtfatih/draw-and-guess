import * as React from "react"
import styled from "styled-components"
import {
  primaryColor,
  secondaryColor,
  successColor,
  dangerColor
} from "../constants/styles"

const ButtonComponent = styled.button`
  border: 0;
  padding: 1em;
  background-color: ${(p) => p.isPrimary && primaryColor};
  background-color: ${(p) => p.isSecondary && secondaryColor};
  background-color: ${(p) => p.isSuccess && successColor};
  background-color: ${(p) => p.isDanger && dangerColor};
  border-radius: 10px;
  font-weight: bold;
  border-top-width: 1px;
  border-bottom-width: 1px;
  box-shadow: 0 0 0 3px #002043, 0 0 0 4px #7c92b0;
  cursor:pointer;
}
`
export const Button = (props) => {
  return <ButtonComponent {...props}>{props.children}</ButtonComponent>
}
