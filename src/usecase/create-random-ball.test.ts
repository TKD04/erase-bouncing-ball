import { describe, expect, it } from "vitest";

import Ball from "../domain/ball";
import BilliardsTable from "../domain/billiards-table";
import createRandomBall from "./create-random-ball";

describe("function createRandomBall()", () => {
  it("returns an instance of Ball", () => {
    expect.hasAssertions();

    const billiardsTable = new BilliardsTable(160, 90);

    const actual = createRandomBall(billiardsTable, 10);

    expect(actual).toBeInstanceOf(Ball);
  });
});
