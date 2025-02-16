import { describe, expect, it } from "@jest/globals";

import Ball from "../domain/ball";
import BilliardsTable from "../domain/billiards-table";
import createRandomBall from "./create-random-ball";

describe("function createRandomBall()", () => {
  it("should be an instance of Ball", () => {
    expect.hasAssertions();

    const billiardsTable = new BilliardsTable(160, 90);

    expect(createRandomBall(billiardsTable, 10)).toBeInstanceOf(Ball);
  });
});
