import { describe, expect, it } from "vitest";

import Color from "./color";
import RGB from "./rgb";

describe("class RGB", () => {
  describe("constructor()", () => {
    it("returns an instance of RGB", () => {
      expect.hasAssertions();

      const red = new Color(225);
      const green = new Color(225);
      const blue = new Color(225);

      const actual = new RGB(red, green, blue);

      expect(actual).toBeInstanceOf(RGB);
    });
  });

  describe("toString()", () => {
    it("is equal to rgb(225, 225, 225)", () => {
      expect.hasAssertions();

      const red = new Color(225);
      const green = new Color(225);
      const blue = new Color(225);
      const rgb = new RGB(red, green, blue);

      const actual = rgb.toString();

      expect(actual).toBe("rgb(225, 225, 225)");
    });
  });
});
