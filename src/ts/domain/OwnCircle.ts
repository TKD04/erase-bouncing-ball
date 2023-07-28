import type BilliardsTable from "./BilliardsTable";
import Color from "./Color";
import Point2D from "./Point2D";
import RGB from "./RGB";
import Velocity2D from "./Velocity2D";

export default class OwnCircle {
  readonly #BILLIARDS_TABLE: BilliardsTable;

  readonly #POINT: Point2D;

  readonly #VELOCISTY: number = 20;

  readonly #VELOCITIES = {
    up: new Velocity2D(0, -this.#VELOCISTY),
    down: new Velocity2D(0, this.#VELOCISTY),
    left: new Velocity2D(-this.#VELOCISTY, 0),
    right: new Velocity2D(this.#VELOCISTY, 0),
  } as const;

  readonly #RADIUS: number = 10;

  readonly #COLOR: RGB = new RGB(
    new Color(254),
    new Color(254),
    new Color(254)
  );

  constructor(billiardsTable: BilliardsTable) {
    this.#BILLIARDS_TABLE = billiardsTable;
    this.#POINT = new Point2D(
      Math.floor(billiardsTable.width / 2),
      Math.floor(billiardsTable.height / 2)
    );
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

  moveToUp(): void {
    if (this.#isOnBilliardsTableTop()) {
      return;
    }
    if (this.#WillOverBilliardsTableTop()) {
      const diffBetweenCircleAndTopWall = -this.#POINT.y + this.radius;
      this.#POINT.move(new Velocity2D(0, diffBetweenCircleAndTopWall));

      return;
    }
    this.#POINT.move(this.#VELOCITIES.up);
  }

  moveToDown(): void {
    if (this.#isOnBilliardsTableBottom()) {
      return;
    }
    if (this.#willOverBilliardsTableBottom()) {
      const diffBetweenCircleAndBottomWall =
        this.#BILLIARDS_TABLE.height - (this.#POINT.y + this.#RADIUS);
      this.#POINT.move(new Velocity2D(0, diffBetweenCircleAndBottomWall));

      return;
    }
    this.#POINT.move(this.#VELOCITIES.down);
  }

  moveToLeft(): void {
    if (this.#isOnBilliardsTableLeft()) {
      return;
    }
    if (this.#willOverBilliardsTableLeft()) {
      const diffBetweenCircleAndLeftWall = -this.#POINT.x + this.#RADIUS;
      this.#POINT.move(new Velocity2D(diffBetweenCircleAndLeftWall, 0));

      return;
    }
    this.#POINT.move(this.#VELOCITIES.left);
  }

  moveToRight(): void {
    if (this.#isOnBilliardsTableRight()) {
      return;
    }
    if (this.#willOverBilliardsTableRight()) {
      const diffBetweenCircleAndRight =
        this.#BILLIARDS_TABLE.width - (this.#POINT.x + this.#RADIUS);
      this.#POINT.move(new Velocity2D(diffBetweenCircleAndRight, 0));
      return;
    }
    this.#POINT.move(this.#VELOCITIES.right);
  }

  #isOnBilliardsTableTop(): boolean {
    if (this.#POINT.y - this.#RADIUS === 0) {
      return true;
    }

    return false;
  }

  #isOnBilliardsTableBottom(): boolean {
    if (this.#POINT.y + this.#RADIUS === this.#BILLIARDS_TABLE.height) {
      return true;
    }

    return false;
  }

  #isOnBilliardsTableLeft(): boolean {
    if (this.#POINT.x - this.#RADIUS === 0) {
      return true;
    }

    return false;
  }

  #isOnBilliardsTableRight(): boolean {
    if (this.#POINT.x + this.#RADIUS === this.#BILLIARDS_TABLE.width) {
      return true;
    }

    return false;
  }

  #WillOverBilliardsTableTop(): boolean {
    if (this.#POINT.y - this.#RADIUS - this.#VELOCISTY <= 0) {
      return true;
    }

    return false;
  }

  #willOverBilliardsTableBottom(): boolean {
    if (
      this.#POINT.y + this.#RADIUS + this.#VELOCISTY >=
      this.#BILLIARDS_TABLE.height
    ) {
      return true;
    }

    return false;
  }

  #willOverBilliardsTableLeft(): boolean {
    if (this.#POINT.x - this.#RADIUS - this.#VELOCISTY <= 0) {
      return true;
    }

    return false;
  }

  #willOverBilliardsTableRight(): boolean {
    if (
      this.#POINT.x + this.#RADIUS + this.#VELOCISTY >=
      this.#BILLIARDS_TABLE.width
    ) {
      return true;
    }

    return false;
  }
}
