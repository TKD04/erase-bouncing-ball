import { describe, expect, it } from "vitest";

import Velocity2D from "./velocity-2d";

describe("class Velocity2D", () => {
  describe("constructor()", () => {
    it("returns an instance of Velocity2D", () => {
      expect.hasAssertions();

      const actual = new Velocity2D(0, 0);

      expect(actual).toBeInstanceOf(Velocity2D);
    });
  });

  describe("get x()", () => {
    it("x() is equal to 2", () => {
      expect.hasAssertions();

      const velocity = new Velocity2D(2, 0);

      const actual = velocity.x;

      expect(actual).toBe(2);
    });
  });

  describe("get y()", () => {
    it("y() is equal to 4", () => {
      expect.hasAssertions();

      const velocity = new Velocity2D(0, 4);

      const actual = velocity.y;

      expect(actual).toBe(4);
    });
  });

  describe("bounceBackX()", () => {
    it("x is equal to -x", () => {
      expect.hasAssertions();

      const velocity = new Velocity2D(2, 4);

      velocity.bounceBackX();
      const actual = velocity.x;

      expect(actual).toBe(-2);
    });
  });

  describe("bounceBackY()", () => {
    it("y is equal to -y", () => {
      expect.hasAssertions();

      const velocity = new Velocity2D(2, 4);

      velocity.bounceBackY();
      const actual = velocity.y;

      expect(actual).toBe(-4);
    });
  });
});
