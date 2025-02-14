import { describe, expect, it } from "@jest/globals";

import Color from "./_color";
import RGB from "./_rgb";

describe("class RGB", () => {
  describe("constructor()", () => {
    it("should be an instance of RGB", () => {
      expect.hasAssertions();

      const red = new Color(225);
      const green = new Color(225);
      const blue = new Color(225);

      expect(new RGB(red, green, blue)).toBeInstanceOf(RGB);
    });
  });

  describe("toString()", () => {
    it("should be equal to rgb(225, 225, 225)", () => {
      expect.hasAssertions();

      const red = new Color(225);
      const green = new Color(225);
      const blue = new Color(225);
      const rgb = new RGB(red, green, blue);

      expect(rgb.toString()).toBe("rgb(225, 225, 225)");
    });
  });
});
