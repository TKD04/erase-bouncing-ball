import type Ball from "../domain/ball";
import type BallRepository from "../domain/ball-repository";

export default class AliveBallRepository implements BallRepository {
  #ballIdToBall = new Map<number, Ball>();

  add(ballId: number, ball: Ball): void {
    this.#ballIdToBall.set(ballId, ball);
  }

  getAll(): readonly Ball[] {
    return [...this.#ballIdToBall.values()];
  }

  length(): number {
    return this.#ballIdToBall.size;
  }

  remove(ballId: number): void {
    if (!this.#ballIdToBall.has(ballId)) {
      throw new RangeError("ballId must be in the keys.");
    }

    this.#ballIdToBall.delete(ballId);
  }
}
