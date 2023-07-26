import Velocity2D from "./Velocity2D";

describe("class Velocity2D", () => {
  describe("constructor()", () => {
    it("should be instance of Velocity2D", () => {
      expect.hasAssertions();
      expect(new Velocity2D(0, 0)).toBeInstanceOf(Velocity2D);
    });
  });

  describe("get x()", () => {
    it("x() should be equal to 2", () => {
      expect.hasAssertions();
      const x = 2;
      const velocity = new Velocity2D(x, 0);
      expect(velocity.x).toBe(x);
    });
  });

  describe("get y()", () => {
    it("y() should be equal to 4", () => {
      expect.hasAssertions();
      const y = 4;
      const velocity = new Velocity2D(0, y);
      expect(velocity.y).toBe(y);
    });
  });

  describe("bounceX()", () => {
    it("x should be equal to -x", () => {
      expect.hasAssertions();
      const x = 2;
      const velocity = new Velocity2D(x, 4);
      velocity.bounceX();
      expect(velocity.x).toBe(-x);
    });
  });

  describe("bounceY()", () => {
    it("y should be equal to -y", () => {
      expect.hasAssertions();
      const y = 4;
      const velocity = new Velocity2D(2, y);
      velocity.bounceY();
      expect(velocity.y).toBe(-y);
    });
  });
});
