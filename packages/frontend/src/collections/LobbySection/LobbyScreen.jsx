import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import UpdateUserNameForm from "./UpdateUserNameForm"
import styled from "styled-components"
import { Button } from "../../components/Button"

const LobbyContainer = styled.div`
  display: flex;
  width: 75%;
  height: 60%;
  background-color: #fff;
  border-radius: 1em;
  padding: 3em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`
const LobbyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${(props) =>
    props.isOtherPlayersExists ? "space-between" : "center"};
  align-items: center;
`
const LobbyTotalPlayersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`
const LobbyTotalPlayerText = styled.p`
  font-weight: bold;
`
const LobbyBodyContainer = styled.div`
  display: flex;
  height: 50%;
  width: 60%;
  justify-content: space-between;
  flex-direction: column;
`

const OtherPlayersContainer = styled.div`
  align-self: flex-start;
  max-height: 200px;
  overflow-y: auto;
  margin: 1em;
`

const ReadyPlayersContainer = styled.div`
  align-self: end;
`
const PlayerStatusText = styled.p`
  color: #3679fc;
  font-weight: bold;
`

export const LobbyScreen = () => {
  const { player, updatePlayer, players } = useContext(GameContext)
  const totalPlayers = players.length
  const playerName = player?.username
    ? player.username.length > 0
      ? player.username
      : player.id
    : player.id

  const otherPlayers = players
    .filter(({ id }) => id !== player.id)
    .map(({ id, username, isReady }, index) => (
      <div key={index}>
        <p>
          {username ? (username.length > 0 ? username : id) : id} /
          {isReady ? "Ready" : "Not Ready"}
        </p>
      </div>
    ))

  const countPlayerThatReady = players.filter(
    ({ id, isReady }) => id !== player.id && isReady === true
  ).length

  return (
    <LobbyContainer>
      <LobbyWrapper isOtherPlayersExists={players.length > 1}>
        <LobbyTotalPlayersContainer>
          <LobbyTotalPlayerText>
            Total Players : {totalPlayers}
          </LobbyTotalPlayerText>
        </LobbyTotalPlayersContainer>
        <LobbyBodyContainer>
          <PlayerStatusText>
            Status :{player.isReady ? "Ready" : "Not Ready"}
          </PlayerStatusText>
          <PlayerStatusText>You : {playerName}</PlayerStatusText>
          <UpdateUserNameForm />
          <Button
            style={{
              backgroundColor: player.isReady ? "#f30" : "#BDE5A4",
              color: player.isReady ? "#fff" : "#000"
            }}
            onClick={() =>
              player.isReady
                ? updatePlayer("isReady", false)
                : updatePlayer("isReady", true)
            }
          >
            {player.isReady ? "Not Ready" : "Ready"}
          </Button>
        </LobbyBodyContainer>
        {otherPlayers.length > 0 ? (
          <>
            <OtherPlayersContainer>
              <LobbyTotalPlayerText>
                Other players / Status : {otherPlayers}
              </LobbyTotalPlayerText>
            </OtherPlayersContainer>

            <ReadyPlayersContainer>
              <LobbyTotalPlayerText>
                Ready players: {countPlayerThatReady}
              </LobbyTotalPlayerText>
            </ReadyPlayersContainer>
          </>
        ) : null}
      </LobbyWrapper>
    </LobbyContainer>
  )
}
