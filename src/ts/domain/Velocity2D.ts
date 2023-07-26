export default class Velocity2D {
  #x: number;

  #y: number;

  constructor(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }

  get x(): number {
    return this.#x;
  }

  get y(): number {
    return this.#y;
  }

  bounceX(): void {
    this.#x = -this.#x;
  }

  bounceY(): void {
    this.#y = -this.#y;
  }
}
