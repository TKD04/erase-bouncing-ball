import type Ball from "../domain/Ball";
import BilliardsTable from "../domain/BilliardsTable";
import OwnCircle from "../domain/OwnCircle";
import type AliveBallRepository from "../infrastructure/AliveBallRepository";
import createRandomBalls from "../usecase/createRandomBalls";
import NumberOfBallsLeftPresenter from "./NumberOfBallsLeftPresenter";

const isHtmlCanvasElement = (el: HTMLElement): el is HTMLCanvasElement =>
  typeof (<HTMLCanvasElement>el).height !== "undefined";
const isHtmlSpanElement = (el: HTMLElement): el is HTMLSpanElement =>
  typeof (<HTMLSpanElement>el).textContent !== "undefined";

export default class GameController {
  readonly #CTX: CanvasRenderingContext2D;

  readonly #BILLIARDS_TABLE: BilliardsTable;

  readonly #ALIVE_BALL_REPOSITORY: AliveBallRepository;

  readonly #OWN_CIRCLE: OwnCircle;

  readonly #NUMBER_OF_BALLS_LEFT_PRESENTER: NumberOfBallsLeftPresenter;

  constructor() {
    const canvasBilliardsTable = document.getElementById("js-billiards-table");
    const spanNumberOfBallsLeft = document.getElementById(
      "js-number-of-balls-left"
    );
    if (
      canvasBilliardsTable === null ||
      !isHtmlCanvasElement(canvasBilliardsTable)
    ) {
      throw new TypeError("canvasBilliardsTable must be HTMLCanvasElement.");
    }
    if (
      spanNumberOfBallsLeft === null ||
      !isHtmlSpanElement(spanNumberOfBallsLeft)
    ) {
      throw new TypeError("spanNumberOfBalls must be HTMLSpanElement.");
    }

    // The dimention of the HTMLCanvasElement must be set before getting ctx.
    const { innerWidth, innerHeight } = window;
    canvasBilliardsTable.width = innerWidth;
    canvasBilliardsTable.height = innerHeight;
    const ctx = canvasBilliardsTable.getContext("2d");
    if (ctx === null) {
      throw new TypeError("ctx must be CanvasRenderingContext2D");
    }

    this.#CTX = ctx;
    this.#BILLIARDS_TABLE = new BilliardsTable(innerWidth, innerHeight);
    this.#ALIVE_BALL_REPOSITORY = createRandomBalls(this.#BILLIARDS_TABLE, 25);
    this.#OWN_CIRCLE = new OwnCircle(this.#BILLIARDS_TABLE);
    this.#NUMBER_OF_BALLS_LEFT_PRESENTER = new NumberOfBallsLeftPresenter(
      spanNumberOfBallsLeft
    );
  }

  start(): void {
    const drawFrame = (): void => {
      this.#drawBilliardsTable();
      this.#drawBalls();
      this.#drawOwnCircle();

      requestAnimationFrame(drawFrame);
    };
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
        case "ArrowUp": {
          this.#OWN_CIRCLE.moveToUp();
          break;
        }
        case "a":
        case "ArrowLeft": {
          this.#OWN_CIRCLE.moveToLeft();
          break;
        }
        case "s":
        case "ArrowDown": {
          this.#OWN_CIRCLE.moveToDown();
          break;
        }
        case "d":
        case "ArrowRight": {
          this.#OWN_CIRCLE.moveToRight();
          break;
        }
        default: {
          return;
        }
      }
      this.#drawOwnCircle();
    });
    this.#NUMBER_OF_BALLS_LEFT_PRESENTER.render(
      this.#ALIVE_BALL_REPOSITORY.length()
    );

    drawFrame();
  }

  #drawBilliardsTable(): void {
    this.#CTX.fillStyle = "rgba(0, 0, 0, 0.25)";
    this.#CTX.fillRect(
      0,
      0,
      this.#BILLIARDS_TABLE.width,
      this.#BILLIARDS_TABLE.height
    );
  }

  #drawBalls(): void {
    this.#ALIVE_BALL_REPOSITORY.getAll().forEach((ball) => {
      if (this.#isColliedWithOwnCircle(ball)) {
        this.#ALIVE_BALL_REPOSITORY.remove(ball.id);
        this.#NUMBER_OF_BALLS_LEFT_PRESENTER.render(
          this.#ALIVE_BALL_REPOSITORY.length()
        );
      }
      this.#drawBall(ball);
      ball.move();
    });
  }

  #isColliedWithOwnCircle(ball: Ball): boolean {
    const dx = this.#OWN_CIRCLE.x - ball.x;
    const dy = this.#OWN_CIRCLE.y - ball.y;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);

    if (distance < this.#OWN_CIRCLE.radius + ball.radius) {
      return true;
    }

    return false;
  }

  #drawBall(ball: Ball): void {
    this.#CTX.beginPath();
    this.#CTX.fillStyle = ball.color;
    this.#CTX.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    this.#CTX.fill();
  }

  #drawOwnCircle(): void {
    this.#CTX.beginPath();
    this.#CTX.lineWidth = 3;
    this.#CTX.strokeStyle = this.#OWN_CIRCLE.color;
    this.#CTX.arc(
      this.#OWN_CIRCLE.x,
      this.#OWN_CIRCLE.y,
      this.#OWN_CIRCLE.radius,
      0,
      2 * Math.PI
    );
    this.#CTX.stroke();
  }
}
