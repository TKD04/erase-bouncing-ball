import type Ball from "./ball";

export default interface BallRepository {
  add(ballId: number, ball: Ball): void;

  getAll(): readonly Ball[];

  get length(): number;

  remove(ballId: number): void;
}
