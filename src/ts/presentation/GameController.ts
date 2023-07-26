import type Ball from "../domain/Ball";
import BilliardsTable from "../domain/BilliardsTable";
import createRandomBalls from "../usecase/createRandomBalls";

const isHtmlCanvasElement = (el: HTMLElement): el is HTMLCanvasElement =>
  typeof (<HTMLCanvasElement>el).height !== "undefined";

export default class GameController {
  readonly #CTX: CanvasRenderingContext2D;

  readonly #BILLIARDS_TABLE: BilliardsTable;

  readonly #BALLS: Ball[];

  constructor() {
    const canvasBilliardsTable = document.getElementById("js-billiards-table");
    if (
      canvasBilliardsTable === null ||
      !isHtmlCanvasElement(canvasBilliardsTable)
    ) {
      throw new TypeError("canvasBilliardsTable must be HTMLCanvasElement.");
    }

    canvasBilliardsTable.width = window.innerWidth;
    canvasBilliardsTable.height = window.innerHeight;
    const ctx = canvasBilliardsTable.getContext("2d");
    const { width, height } = canvasBilliardsTable;
    if (ctx === null) {
      throw new TypeError("ctx must be CanvasRenderingContext2D");
    }

    this.#CTX = ctx;
    this.#BILLIARDS_TABLE = new BilliardsTable(width, height);
    this.#BALLS = createRandomBalls(this.#BILLIARDS_TABLE, 25);
  }

  start(): void {
    const drawFrame = (): void => {
      this.#CTX.fillStyle = "rgba(0, 0, 0, 0.25)";
      this.#CTX.fillRect(
        0,
        0,
        this.#BILLIARDS_TABLE.width,
        this.#BILLIARDS_TABLE.height
      );

      this.#BALLS.forEach((ball) => {
        this.#drawBall(ball);
        ball.move();
      });

      requestAnimationFrame(drawFrame);
    };

    drawFrame();
  }

  #drawBall(ball: Ball): void {
    this.#CTX.beginPath();
    this.#CTX.fillStyle = ball.color;
    this.#CTX.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    this.#CTX.fill();
  }
}
