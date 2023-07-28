import Point2D from "./Point2D";
import Velocity2D from "./Velocity2D";

describe("class Point2D", () => {
  describe("constructor()", () => {
    it("should be an instance of Point2D", () => {
      expect.hasAssertions();
      expect(new Point2D(0, 0)).toBeInstanceOf(Point2D);
    });
  });

  describe("get x()", () => {
    it("x should be equal to 2", () => {
      expect.hasAssertions();
      const point = new Point2D(2, 0);
      expect(point.x).toBe(2);
    });
  });

  describe("get y()", () => {
    it("y should be equal to 4", () => {
      expect.hasAssertions();
      const point = new Point2D(0, 4);
      expect(point.y).toBe(4);
    });
  });

  describe("move()", () => {
    it("[x, y] should be [2, 4]", () => {
      expect.assertions(2);
      const velocity = new Velocity2D(2, 4);
      const point = new Point2D(0, 0);
      point.move(velocity);
      expect(point.x).toBe(2);
      expect(point.y).toBe(4);
    });
  });
});
