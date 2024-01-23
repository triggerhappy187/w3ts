import { MapPlayer } from "../handles/player";

export * from "./order";
export const Players = Array.from({ length: bj_MAX_PLAYER_SLOTS }).map(
  (_, i) => {
    return MapPlayer.fromHandle(Player(i)!)!;
  }
);
