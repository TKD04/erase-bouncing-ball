import type IHtmlPresenter from "./IHtmlPresenter";

export default class NumberOfBallsLeftPresenter
  implements IHtmlPresenter<number>
{
  readonly #SPAN_NUMBER_OF_BALLS_LEFT: HTMLSpanElement;

  constructor(spanNumberOfBallsLeft: HTMLSpanElement) {
    this.#SPAN_NUMBER_OF_BALLS_LEFT = spanNumberOfBallsLeft;
  }

  render(numberOfBallsLeft: number): void {
    this.#SPAN_NUMBER_OF_BALLS_LEFT.textContent = numberOfBallsLeft.toString();
  }
}
