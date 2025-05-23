import type BilliardsTable from "./billiards-table";
import Color from "./color";
import Point2D from "./point-2d";
import RGB from "./rgb";
import Velocity2D from "./velocity-2d";

export default class OwnCircle {
  get color(): string {
    return this.#COLOR.toString();
  }

  get radius(): number {
    return this.#RADIUS;
  }

  get x(): number {
    return this.#POINT.x;
  }

  get y(): number {
    return this.#POINT.y;
  }

  readonly #BILLIARDS_TABLE: BilliardsTable;

  readonly #COLOR: RGB = new RGB(
    new Color(254),
    new Color(254),
    new Color(254)
  );

  readonly #POINT: Point2D;

  readonly #RADIUS: number = 10;

  readonly #VELOCISTY: number = 20;

  readonly #VELOCITIES = {
    down: new Velocity2D(0, this.#VELOCISTY),
    left: new Velocity2D(-this.#VELOCISTY, 0),
    right: new Velocity2D(this.#VELOCISTY, 0),
    up: new Velocity2D(0, -this.#VELOCISTY),
  } as const;

  constructor(billiardsTable: BilliardsTable) {
    this.#BILLIARDS_TABLE = billiardsTable;
    this.#POINT = new Point2D(
      Math.floor(billiardsTable.width / 2),
      Math.floor(billiardsTable.height / 2)
    );
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
      const diffBetweenCircleAndRightWall =
        this.#BILLIARDS_TABLE.width - (this.#POINT.x + this.#RADIUS);
      this.#POINT.move(new Velocity2D(diffBetweenCircleAndRightWall, 0));

      return;
    }
    this.#POINT.move(this.#VELOCITIES.right);
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

  #isOnBilliardsTableTop(): boolean {
    if (this.#POINT.y - this.#RADIUS === 0) {
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

  #WillOverBilliardsTableTop(): boolean {
    if (this.#POINT.y - this.#RADIUS - this.#VELOCISTY <= 0) {
      return true;
    }

    return false;
  }
}
