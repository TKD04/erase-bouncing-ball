export default class Color {
  get value(): number {
    return this.#VALUE;
  }

  readonly #VALUE: number;

  constructor(value: number) {
    if (value < 0 || value > 255) {
      throw new RangeError("value must be in the range 0-255.");
    }

    this.#VALUE = value;
  }
}
