import type Color from "./_color";

export default class RGB {
  readonly #BLUE: Color;

  readonly #GREEN: Color;

  readonly #RED: Color;

  constructor(red: Color, green: Color, blue: Color) {
    this.#RED = red;
    this.#GREEN = green;
    this.#BLUE = blue;
  }

  toString(): string {
    return `rgb(${this.#RED.value}, ${this.#GREEN.value}, ${this.#BLUE.value})`;
  }
}
