import { InfoPlayer } from "../types";

export const registredPlayers = () => {
  const sessionPlayers: null | undefined | string =
    sessionStorage.getItem("players");

  if (!sessionPlayers && sessionPlayers == null) {
    sessionStorage.setItem(
      "players",
      JSON.stringify([
        {
          player: 1,
          life: 40,
          commanderDamage: [0, 0, 0, 0, 0, 0, 0, 0],
          infect: 0,
        },
        {
          player: 2,
          life: 20,
          commanderDamage: [0, 0, 0, 0, 0, 0, 0, 0],
          infect: 0,
        },
      ])
    );
  }
};

export const updateRegistredPlayers = (dataUpdate: InfoPlayer) => {
  const sessionPlayers: null | undefined | string =
    sessionStorage.getItem("players");

  if (sessionPlayers && sessionPlayers !== null) {
    const infoPlayers: InfoPlayer[] = JSON.parse(sessionPlayers);

    const indexPlayer = infoPlayers?.findIndex(
      (item) => item?.player == dataUpdate?.player
    );

    infoPlayers[indexPlayer] = dataUpdate;

    sessionStorage.setItem("players", JSON.stringify(infoPlayers));
  }
};

export const cleanRegistredPlayers = () => {};

export const getRegistredPlayers = (playerNumber: number): InfoPlayer => {
  const sessionPlayers: null | undefined | string =
    sessionStorage.getItem("players");

  if (sessionPlayers && sessionPlayers !== null) {
    const infoPlayers: InfoPlayer[] = JSON.parse(sessionPlayers);

    const player = infoPlayers?.find((item) => item?.player == playerNumber);

    if (player) {
      return player;
    }
  }

  return {
    player: playerNumber,
    life: 40,
    commanderDamage: [0, 0, 0, 0, 0, 0, 0, 0],
    infect: 0,
  } as InfoPlayer;
};
