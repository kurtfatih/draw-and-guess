import styled from "styled-components"
const Card = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  height: 100%;
`
const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5%;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export { CardItem, Card }
