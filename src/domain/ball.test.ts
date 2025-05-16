import { describe, expect, it } from "vitest";

import Ball from "./ball";
import BilliardsTable from "./billiards-table";
import Color from "./color";
import Point2D from "./point-2d";
import RGB from "./rgb";
import Velocity2D from "./velocity-2d";

const createBilliardsTable = () => new BilliardsTable(160, 90);
const createCoordinate = () => new Point2D(50, 50);
const createVelocity = () => new Velocity2D(5, 5);
const createColor = () =>
  new RGB(new Color(225), new Color(225), new Color(225));
const createBall = () =>
  new Ball(
    createBilliardsTable(),
    createCoordinate(),
    createVelocity(),
    1,
    createColor(),
    1
  );

describe("class Ball", () => {
  describe("get color()", () => {
    it("color is equal to rgb(225, 225, 225)", () => {
      expect.assertions(1);

      const ball = createBall();

      const actual = ball.color;

      expect(actual).toBe("rgb(225, 225, 225)");
    });
  });

  describe("get id()", () => {
    it("id is equal to 1", () => {
      expect.assertions(1);

      const ball = createBall();

      const actual = ball.id;

      expect(actual).toBe(1);
    });
  });

  describe("get radius()", () => {
    it("radius is equal to 1", () => {
      expect.assertions(1);

      const ball = createBall();

      const actual = ball.radius;

      expect(actual).toBe(1);
    });
  });

  describe("get x()", () => {
    it("x is equal to zero", () => {
      expect.assertions(1);

      const ball = createBall();

      const actual = ball.x;

      expect(actual).toBe(50);
    });
  });

  describe("get y()", () => {
    it("y is equal to zero", () => {
      expect.assertions(1);

      const ball = createBall();

      const actual = ball.y;

      expect(actual).toBe(50);
    });
  });

  describe("constructor()", () => {
    it("throws RangeError if radius is zero", () => {
      expect.assertions(1);

      const billiardsTable = createBilliardsTable();
      const coordinate = createCoordinate();
      const velocity = createVelocity();
      const color = createColor();
      const radius = 0;

      expect(
        () => new Ball(billiardsTable, coordinate, velocity, radius, color, 1)
      ).toThrow(new RangeError("radius must be greater than zero."));
    });

    it("throws RangeError if radius is a negative number", () => {
      expect.assertions(1);

      const billiardsTable = createBilliardsTable();
      const coordinate = createCoordinate();
      const velocity = createVelocity();
      const color = createColor();
      const radius = -1;

      expect(
        () => new Ball(billiardsTable, coordinate, velocity, radius, color, 1)
      ).toThrow(new RangeError("radius must be greater than zero."));
    });

    it("ball is an instance of Ball class", () => {
      expect.assertions(1);

      const billiardsTable = createBilliardsTable();
      const coordinate = createCoordinate();
      const velocity = createVelocity();
      const color = createColor();

      const actual = new Ball(
        billiardsTable,
        coordinate,
        velocity,
        1,
        color,
        1
      );

      expect(actual).toBeInstanceOf(Ball);
    });
  });

  describe("move()", () => {
    it("[x, y] is equal to [55, 55]", () => {
      expect.assertions(2);

      const ball = createBall();

      ball.move();
      const actualX = ball.x;
      const actualY = ball.y;

      expect(actualX).toBe(55);
      expect(actualY).toBe(55);
    });
  });
});
