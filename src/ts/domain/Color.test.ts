import Color from "./Color";

describe("class Color", () => {
  describe("constructor()", () => {
    it("should be instace of Color when color is zero", () => {
      expect.hasAssertions();
      expect(new Color(0)).toBeInstanceOf(Color);
    });
    it("should be instace of Color when color is 255", () => {
      expect.hasAssertions();
      expect(new Color(255)).toBeInstanceOf(Color);
    });
    it("should throw error when color is negative", () => {
      expect.hasAssertions();
      expect(() => new Color(-1)).toThrow(
        new RangeError("value must be in the range 0-255."),
      );
    });
    it("should throw error when color is 256", () => {
      expect.hasAssertions();
      expect(() => new Color(256)).toThrow(
        new RangeError("value must be in the range 0-255."),
      );
    });
  });

  describe("get value()", () => {
    it("value should be equal to zero", () => {
      expect.hasAssertions();
      const value = 0;
      const color = new Color(value);
      expect(color.value).toBe(value);
    });
    it("value should be equal to 255", () => {
      expect.hasAssertions();
      const value = 255;
      const color = new Color(value);
      expect(color.value).toBe(value);
    });
  });
});
