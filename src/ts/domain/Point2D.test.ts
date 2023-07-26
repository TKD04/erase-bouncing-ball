import Point2D from "./Point2D";
import Velocity2D from "./Velocity2D";

describe("class Point2D", () => {
  describe("constructor()", () => {
    it("should be instance of Point2D", () => {
      expect.hasAssertions();
      expect(new Point2D(0, 0)).toBeInstanceOf(Point2D);
    });
  });

  describe("get x()", () => {
    it("x should be equal to 2", () => {
      expect.hasAssertions();
      const x = 2;
      const point = new Point2D(x, 0);
      expect(point.x).toBe(x);
    });
  });

  describe("get y()", () => {
    it("y should be equal to 4", () => {
      expect.hasAssertions();
      const y = 4;
      const point = new Point2D(0, y);
      expect(point.y).toBe(y);
    });
  });

  describe("move()", () => {
    it("[x, y] should be [2, 4]", () => {
      expect.assertions(2);
      const [x, y] = [2, 4];
      const velocity = new Velocity2D(x, y);
      const point = new Point2D(0, 0);
      point.move(velocity);
      expect(point.x).toBe(x);
      expect(point.y).toBe(y);
    });
  });
});
