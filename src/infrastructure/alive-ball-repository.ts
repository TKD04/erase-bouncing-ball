import type Ball from "../domain/ball";
import type BallRepository from "../domain/ball-repository";

export default class AliveBallRepository implements BallRepository {
  get length(): number {
    return this.#ballIdToBall.size;
  }

  #ballIdToBall = new Map<number, Ball>();

  add(ballId: number, ball: Ball): void {
    if (this.#ballIdToBall.has(ballId)) {
      throw new Error(`ballId ${ballId.toString()} is already in place.`);
    }

    this.#ballIdToBall.set(ballId, ball);
  }

  getAll(): readonly Ball[] {
    return [...this.#ballIdToBall.values()];
  }

  remove(ballId: number): void {
    if (!this.#ballIdToBall.has(ballId)) {
      throw new RangeError("ballId must be in the keys.");
    }

    this.#ballIdToBall.delete(ballId);
  }
}
