import type Velocity2D from "./Velocity2D";

export default class Point2D {
  get x(): number {
    return this.#x;
  }

  get y(): number {
    return this.#y;
  }

  #x: number;

  #y: number;

  constructor(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }

  move(velocity: Velocity2D): void {
    this.#x += velocity.x;
    this.#y += velocity.y;
  }
}
