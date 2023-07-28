import BilliardsTable from "./BilliardsTable";

describe("class BilliardsTable", () => {
  describe("constructor()", () => {
    it("should be an instance of BilliardsTable", () => {
      expect.hasAssertions();
      expect(new BilliardsTable(160, 90)).toBeInstanceOf(BilliardsTable);
    });
    it("should throw error when width is zero", () => {
      expect.hasAssertions();
      expect(() => new BilliardsTable(0, 90)).toThrow(
        new RangeError("width must be greater than zero.")
      );
    });
    it("should throw error when width is negative", () => {
      expect.hasAssertions();
      expect(() => new BilliardsTable(-160, 90)).toThrow(
        new RangeError("width must be greater than zero.")
      );
    });
    it("should throw error when height is zero", () => {
      expect.hasAssertions();
      expect(() => new BilliardsTable(160, 0)).toThrow(
        new RangeError("height must be greater than zero.")
      );
    });
    it("should throw error when height is negative", () => {
      expect.hasAssertions();
      expect(() => new BilliardsTable(160, -90)).toThrow(
        new RangeError("height must be greater than zero.")
      );
    });
  });

  describe("get width()", () => {
    it("width should be equal to 160", () => {
      expect.hasAssertions();
      const billiardsTable = new BilliardsTable(160, 90);
      expect(billiardsTable.width).toBe(160);
    });
  });

  describe("get height()", () => {
    it("height should be equal to 90", () => {
      expect.hasAssertions();
      const billiardsTable = new BilliardsTable(160, 90);
      expect(billiardsTable.height).toBe(90);
    });
  });
});
