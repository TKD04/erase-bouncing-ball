import type Ball from "../domain/_ball";
import BilliardsTable from "../domain/billiards-table";
import type IBallRepository from "../domain/i-ball-repository";
import OwnCircle from "../domain/own-circle";
import createRandomBalls from "../usecase/create-random-balls";
import NumberOfBallsLeftPresenter from "./number-of-balls-left-presenter";

const isHtmlCanvasElement = (
  element: HTMLElement
): element is HTMLCanvasElement =>
  (element as HTMLCanvasElement).height !== undefined;
const isHtmlSpanElement = (element: HTMLElement): element is HTMLSpanElement =>
  (element as HTMLSpanElement).textContent !== undefined;

export default class GameController {
  readonly #ALIVE_BALL_REPOSITORY: IBallRepository;

  readonly #BILLIARDS_TABLE: BilliardsTable;

  readonly #CTX: CanvasRenderingContext2D;

  readonly #NUMBER_OF_BALLS_LEFT_PRESENTER: NumberOfBallsLeftPresenter;

  readonly #OWN_CIRCLE: OwnCircle;

  constructor() {
    const canvasBilliardsTable = document.querySelector("#js-billiards-table");
    const spanNumberOfBallsLeft = document.querySelector(
      "#js-number-of-balls-left"
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
    const { innerHeight, innerWidth } = globalThis;
    canvasBilliardsTable.width = innerWidth;
    canvasBilliardsTable.height = innerHeight;
    const context = canvasBilliardsTable.getContext("2d");
    if (context === null) {
      throw new TypeError("ctx must be CanvasRenderingContext2D");
    }

    this.#CTX = context;
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
    globalThis.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
        case "ArrowLeft": {
          this.#OWN_CIRCLE.moveToLeft();
          break;
        }
        case "ArrowDown":
        case "s": {
          this.#OWN_CIRCLE.moveToDown();
          break;
        }
        case "ArrowRight":
        case "d": {
          this.#OWN_CIRCLE.moveToRight();
          break;
        }
        case "ArrowUp":
        case "w": {
          this.#OWN_CIRCLE.moveToUp();
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

  #drawBall(ball: Ball): void {
    this.#CTX.beginPath();
    this.#CTX.fillStyle = ball.color;
    this.#CTX.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    this.#CTX.fill();
  }

  #drawBalls(): void {
    for (const ball of this.#ALIVE_BALL_REPOSITORY.getAll()) {
      if (this.#isColliedWithOwnCircle(ball)) {
        this.#ALIVE_BALL_REPOSITORY.remove(ball.id);
        this.#NUMBER_OF_BALLS_LEFT_PRESENTER.render(
          this.#ALIVE_BALL_REPOSITORY.length()
        );
      }
      this.#drawBall(ball);
      ball.move();
    }
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

  #isColliedWithOwnCircle(ball: Ball): boolean {
    const dx = this.#OWN_CIRCLE.x - ball.x;
    const dy = this.#OWN_CIRCLE.y - ball.y;
    const distance = Math.hypot(dx, dy);

    if (distance < this.#OWN_CIRCLE.radius + ball.radius) {
      return true;
    }

    return false;
  }
}
