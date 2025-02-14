export default class BilliardsTable {
  get height(): number {
    return this.#HEIGHT;
  }

  get width(): number {
    return this.#WIDTH;
  }

  readonly #HEIGHT: number;

  readonly #WIDTH: number;

  constructor(width: number, height: number) {
    if (width <= 0) {
      throw new RangeError("width must be greater than zero.");
    }
    if (height <= 0) {
      throw new RangeError("height must be greater than zero.");
    }

    this.#WIDTH = width;
    this.#HEIGHT = height;
  }
}
