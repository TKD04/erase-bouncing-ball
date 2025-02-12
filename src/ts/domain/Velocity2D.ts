export default class Velocity2D {
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

  bounceBackX(): void {
    this.#x = -this.#x;
  }

  bounceBackY(): void {
    this.#y = -this.#y;
  }
}
