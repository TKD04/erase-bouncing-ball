import type Ball from "./_ball";

export default interface IBallRepository {
  add(ballId: number, ball: Ball): void;

  getAll(): readonly Ball[];

  length(): number;

  remove(ballId: number): void;
}
