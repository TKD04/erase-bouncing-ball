import type Ball from "./Ball";

export default interface IBallRepository {
  add(ballId: number, ball: Ball): void;

  remove(ballId: number): void;

  getAll(): ReadonlyArray<Ball>;
}
