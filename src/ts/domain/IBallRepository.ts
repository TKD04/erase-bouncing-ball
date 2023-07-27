import type Ball from "./Ball";

export default interface IBallRepository {
  getAll(): ReadonlyMap<number, Ball>;

  add(ballId: number, ball: Ball): void;

  remove(ballId: number): void;

  length(): number;
}
