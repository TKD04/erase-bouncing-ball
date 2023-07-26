import type Color from "./Color";

export default class RGB {
  readonly #RED: Color;

  readonly #GREEN: Color;

  readonly #BLUE: Color;

  constructor(red: Color, green: Color, blue: Color) {
    this.#RED = red;
    this.#GREEN = green;
    this.#BLUE = blue;
  }

  toString(): string {
    return `rgb(${this.#RED.value}, ${this.#GREEN.value}, ${this.#BLUE.value})`;
  }
}
