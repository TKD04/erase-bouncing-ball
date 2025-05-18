import { describe, expect, it } from "vitest";

import Color from "./color";

describe("class Color", () => {
  describe("constructor()", () => {
    it("returns an instace of Color if color is zero", () => {
      expect.hasAssertions();

      const actual = new Color(0);

      expect(actual).toBeInstanceOf(Color);
    });

    it("returns an instace of Color if color is 255", () => {
      expect.hasAssertions();

      const actual = new Color(255);

      expect(actual).toBeInstanceOf(Color);
    });

    it("throws an error if color is negative", () => {
      expect.hasAssertions();

      expect(() => new Color(-1)).toThrow(
        new RangeError("value must be in the range 0-255.")
      );
    });

    it("throws an error if color is 256", () => {
      expect.hasAssertions();

      expect(() => new Color(256)).toThrow(
        new RangeError("value must be in the range 0-255.")
      );
    });
  });

  describe("get value()", () => {
    it("value is equal to zero", () => {
      expect.hasAssertions();

      const color = new Color(0);

      const actual = color.value;

      expect(actual).toBe(0);
    });

    it("value is equal to 255", () => {
      expect.hasAssertions();

      const color = new Color(255);

      const actual = color.value;

      expect(actual).toBe(255);
    });
  });
});
