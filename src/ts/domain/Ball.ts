import type BilliardsTable from "./BilliardsTable";
import type Point2D from "./Point2D";
import type RGB from "./RGB";
import type Velocity2D from "./Velocity2D";

export default class Ball {
  readonly #BILLIARDS_TABLE: BilliardsTable;

  readonly #COORDINATE: Point2D;

  readonly #VELOCITY: Velocity2D;

  readonly #RADIUS: number;

  readonly #COLOR: RGB;

  constructor(
    billiardsTable: BilliardsTable,
    coordinate: Point2D,
    velocity: Velocity2D,
    radius: number,
    color: RGB
  ) {
    if (radius <= 0) {
      throw new RangeError("radius must be greater than zero.");
    }

    this.#BILLIARDS_TABLE = billiardsTable;
    this.#COORDINATE = coordinate;
    this.#VELOCITY = velocity;
    this.#RADIUS = radius;
    this.#COLOR = color;
  }

  get x(): number {
    return this.#COORDINATE.x;
  }

  get y(): number {
    return this.#COORDINATE.y;
  }

  get radius(): number {
    return this.#RADIUS;
  }

  get color(): string {
    return this.#COLOR.toString();
  }

  move(): void {
    if (this.#isOverBilliardsTableX()) {
      this.#VELOCITY.bounceX();
    }
    if (this.#isOverBilliardsTableY()) {
      this.#VELOCITY.bounceY();
    }
    this.#COORDINATE.move(this.#VELOCITY);
  }

  #isOverBilliardsTableX(): boolean {
    const { x } = this.#COORDINATE;
    const radius = this.#RADIUS;
    const { width } = this.#BILLIARDS_TABLE;

    if (x - radius <= 0 || x + radius >= width) {
      return true;
    }

    return false;
  }

  #isOverBilliardsTableY(): boolean {
    const { y } = this.#COORDINATE;
    const radius = this.#RADIUS;
    const { height } = this.#BILLIARDS_TABLE;

    if (y - radius <= 0 || y + radius >= height) {
      return true;
    }

    return false;
  }
}
