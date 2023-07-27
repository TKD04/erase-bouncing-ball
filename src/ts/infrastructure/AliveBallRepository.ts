import type Ball from "../domain/Ball";
import type IBallRepository from "../domain/IBallRepository";

export default class AliveBallRepository implements IBallRepository {
  #ballIdToBall: Map<number, Ball> = new Map();

  getAll(): ReadonlyArray<Ball> {
    const balls: Ball[] = [];

    this.#ballIdToBall.forEach((ball) => {
      balls.push(ball);
    });

    return balls;
  }

  add(ballId: number, ball: Ball): void {
    this.#ballIdToBall.set(ballId, ball);
  }

  remove(ballId: number): void {
    this.#ballIdToBall.delete(ballId);
  }
}
