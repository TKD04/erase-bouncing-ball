import type Ball from "../domain/Ball";
import type IBallRepository from "../domain/IBallRepository";

export default class AliveBallRepository implements IBallRepository {
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
