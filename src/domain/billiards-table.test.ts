import { describe, expect, it } from "vitest";

import BilliardsTable from "./billiards-table";

describe("class BilliardsTable", () => {
  describe("constructor()", () => {
    it("returns an instance of BilliardsTable", () => {
      expect.hasAssertions();

      const actual = new BilliardsTable(160, 90);

      expect(actual).toBeInstanceOf(BilliardsTable);
    });

    it("throws an error if width is zero", () => {
      expect.hasAssertions();

      expect(() => new BilliardsTable(0, 90)).toThrow(
        new RangeError("width must be greater than zero.")
      );
    });

    it("throws an error if width is negative", () => {
      expect.hasAssertions();

      expect(() => new BilliardsTable(-160, 90)).toThrow(
        new RangeError("width must be greater than zero.")
      );
    });

    it("throws an error if height is zero", () => {
      expect.hasAssertions();

      expect(() => new BilliardsTable(160, 0)).toThrow(
        new RangeError("height must be greater than zero.")
      );
    });

    it("throws an error if height is negative", () => {
      expect.hasAssertions();

      expect(() => new BilliardsTable(160, -90)).toThrow(
        new RangeError("height must be greater than zero.")
      );
    });
  });

  describe("get width()", () => {
    it("width is equal to 160", () => {
      expect.hasAssertions();

      const billiardsTable = new BilliardsTable(160, 90);

      const actual = billiardsTable.width;

      expect(actual).toBe(160);
    });
  });

  describe("get height()", () => {
    it("height is equal to 90", () => {
      expect.hasAssertions();

      const billiardsTable = new BilliardsTable(160, 90);

      const actual = billiardsTable.height;

      expect(actual).toBe(90);
    });
  });
});
