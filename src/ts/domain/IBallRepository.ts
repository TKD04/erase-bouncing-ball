import type Ball from "./Ball";

export default interface IBallRepository {
  getAll(): ReadonlyArray<Ball>;

  add(ballId: number, ball: Ball): void;

  remove(ballId: number): void;

  length(): number;
}
