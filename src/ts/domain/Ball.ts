import type BilliardsTable from "./BilliardsTable";
import type Point2D from "./Point2D";
import type RGB from "./RGB";
import type Velocity2D from "./Velocity2D";

export default class Ball {
  readonly #BILLIARDS_TABLE: BilliardsTable;

  readonly #POINT: Point2D;

  readonly #VELOCITY: Velocity2D;

  readonly #RADIUS: number;

  readonly #COLOR: RGB;

  readonly #ID: number;

  constructor(
    billiardsTable: BilliardsTable,
    point: Point2D,
    velocity: Velocity2D,
    radius: number,
    color: RGB,
    id: number
  ) {
    if (radius <= 0) {
      throw new RangeError("radius must be greater than zero.");
    }

    this.#BILLIARDS_TABLE = billiardsTable;
    this.#POINT = point;
    this.#VELOCITY = velocity;
    this.#RADIUS = radius;
    this.#COLOR = color;
    this.#ID = id;
  }

  get x(): number {
    return this.#POINT.x;
  }

  get y(): number {
    return this.#POINT.y;
  }

  get radius(): number {
    return this.#RADIUS;
  }

  get color(): string {
    return this.#COLOR.toString();
  }

  get id(): number {
    return this.#ID;
  }

  move(): void {
    if (this.#isOverBilliardsTableX()) {
      this.#VELOCITY.bounceBackX();
    }
    if (this.#isOverBilliardsTableY()) {
      this.#VELOCITY.bounceBackY();
    }
    this.#POINT.move(this.#VELOCITY);
  }

  #isOverBilliardsTableX(): boolean {
    if (
      this.#POINT.x - this.#RADIUS <= 0 ||
      this.#POINT.x + this.#RADIUS >= this.#BILLIARDS_TABLE.width
    ) {
      return true;
    }

    return false;
  }

  #isOverBilliardsTableY(): boolean {
    if (
      this.#POINT.y - this.#RADIUS <= 0 ||
      this.#POINT.y + this.#RADIUS >= this.#BILLIARDS_TABLE.height
    ) {
      return true;
    }

    return false;
  }
}
