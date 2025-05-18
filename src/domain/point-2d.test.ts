import { describe, expect, it } from "vitest";

import Point2D from "./point-2d";
import Velocity2D from "./velocity-2d";

describe("class Point2D", () => {
  describe("constructor()", () => {
    it("returns an instance of Point2D", () => {
      expect.hasAssertions();

      const actual = new Point2D(0, 0);

      expect(actual).toBeInstanceOf(Point2D);
    });
  });

  describe("get x()", () => {
    it("x is equal to 2", () => {
      expect.hasAssertions();

      const point = new Point2D(2, 0);

      const actual = point.x;

      expect(actual).toBe(2);
    });
  });

  describe("get y()", () => {
    it("y is equal to 4", () => {
      expect.hasAssertions();

      const point = new Point2D(0, 4);

      const actual = point.y;

      expect(actual).toBe(4);
    });
  });

  describe("move()", () => {
    it("[x, y] is [2, 4]", () => {
      expect.assertions(2);

      const velocity = new Velocity2D(2, 4);
      const point = new Point2D(0, 0);

      point.move(velocity);
      const actualX = point.x;
      const actualY = point.y;

      expect(actualX).toBe(2);
      expect(actualY).toBe(4);
    });
  });
});
