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

  describe("bounceX()", () => {
    it("x should be equal to -x", () => {
      expect.hasAssertions();
      const velocity = new Velocity2D(2, 4);
      velocity.bounceX();
      expect(velocity.x).toBe(-2);
    });
  });

  describe("bounceY()", () => {
    it("y should be equal to -y", () => {
      expect.hasAssertions();
      const velocity = new Velocity2D(2, 4);
      velocity.bounceY();
      expect(velocity.y).toBe(-4);
    });
  });
});
