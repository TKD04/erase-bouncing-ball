import { describe, expect, it } from "@jest/globals";

import Ball from "./ball";
import BilliardsTable from "./billiards-table";
import Color from "./color";
import Point2D from "./point-2d";
import RGB from "./rgb";
import Velocity2D from "./velocity-2d";

const billiardsTable = new BilliardsTable(160, 90);
const coordinate = new Point2D(50, 50);
const velocity = new Velocity2D(5, 5);
const color = new RGB(new Color(225), new Color(225), new Color(225));

describe("class Ball", () => {
  describe("constructor()", () => {
    it("should be an instance of Ball", () => {
      expect.hasAssertions();
      expect(
        new Ball(billiardsTable, coordinate, velocity, 1, color, 1)
      ).toBeInstanceOf(Ball);
    });

    it("should throw an error when radius is zero", () => {
      expect.hasAssertions();
      expect(
        () => new Ball(billiardsTable, coordinate, velocity, 0, color, 1)
      ).toThrow(new RangeError("radius must be greater than zero."));
    });

    it("should throw an error when radius is negative", () => {
      expect.hasAssertions();
      expect(
        () => new Ball(billiardsTable, coordinate, velocity, -1, color, 1)
      ).toThrow(new RangeError("radius must be greater than zero."));
    });
  });

  describe("get x()", () => {
    it("x should be equal to zero", () => {
      expect.hasAssertions();

      const ball = new Ball(billiardsTable, coordinate, velocity, 1, color, 1);

      expect(ball.x).toBe(50);
    });
  });

  describe("get y()", () => {
    it("y should be equal to zero", () => {
      expect.hasAssertions();

      const ball = new Ball(billiardsTable, coordinate, velocity, 1, color, 1);

      expect(ball.y).toBe(50);
    });
  });

  describe("get radius()", () => {
    it("radius should be equal to 1", () => {
      expect.hasAssertions();

      const ball = new Ball(billiardsTable, coordinate, velocity, 1, color, 1);

      expect(ball.radius).toBe(1);
    });
  });

  describe("get color()", () => {
    it("color should be equal to rgb(225, 225, 225)", () => {
      expect.hasAssertions();

      const ball = new Ball(billiardsTable, coordinate, velocity, 1, color, 1);

      expect(ball.color).toBe("rgb(225, 225, 225)");
    });
  });

  describe("get id()", () => {
    it("id should be equal to 1", () => {
      expect.hasAssertions();

      const ball = new Ball(billiardsTable, coordinate, velocity, 1, color, 1);

      expect(ball.id).toBe(1);
    });
  });

  describe("move()", () => {
    it("[x, y] should be equal to [5, 5]", () => {
      expect.assertions(2);

      const ball = new Ball(billiardsTable, coordinate, velocity, 1, color, 1);
      ball.move();

      expect(ball.x).toBe(55);
      expect(ball.y).toBe(55);
    });
  });
});
