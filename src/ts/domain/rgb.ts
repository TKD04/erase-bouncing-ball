import type Color from "./color";

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
    return `rgb(${this.#RED.value.toString()}, ${this.#GREEN.value.toString()}, ${this.#BLUE.value.toString()})`;
  }
}
