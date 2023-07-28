import Ball from "../domain/Ball";
import BilliardsTable from "../domain/BilliardsTable";
import createRandomBall from "./createRandomBall";

describe("function createRandomBall()", () => {
  it("should be an instance of Ball", () => {
    expect.hasAssertions();
    const billiardsTable = new BilliardsTable(160, 90);
    expect(createRandomBall(billiardsTable, 10)).toBeInstanceOf(Ball);
  });
});
