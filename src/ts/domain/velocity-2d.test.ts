import { describe, expect, it } from "@jest/globals";

import Velocity2D from "./velocity-2d";

describe("class Velocity2D", () => {
  describe("constructor()", () => {
    it("should be an instance of Velocity2D", () => {
      expect.hasAssertions();
      expect(new Velocity2D(0, 0)).toBeInstanceOf(Velocity2D);
    });
  });

  describe("get x()", () => {
    it("x() should be equal to 2", () => {
      expect.hasAssertions();

      const velocity = new Velocity2D(2, 0);

      expect(velocity.x).toBe(2);
    });
  });

  describe("get y()", () => {
    it("y() should be equal to 4", () => {
      expect.hasAssertions();

      const velocity = new Velocity2D(0, 4);

      expect(velocity.y).toBe(4);
    });
  });

  describe("bounceBackX()", () => {
    it("x should be equal to -x", () => {
      expect.hasAssertions();

      const velocity = new Velocity2D(2, 4);
      velocity.bounceBackX();

      expect(velocity.x).toBe(-2);
    });
  });

  describe("bounceBackY()", () => {
    it("y should be equal to -y", () => {
      expect.hasAssertions();

      const velocity = new Velocity2D(2, 4);
      velocity.bounceBackY();

      expect(velocity.y).toBe(-4);
    });
  });
});
