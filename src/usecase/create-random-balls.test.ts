import { describe, expect, it } from "vitest";

import BilliardsTable from "../domain/billiards-table";
import AliveBallRepository from "../infrastructure/alive-ball-repository";
import createRandomBalls from "./create-random-balls";

describe("function createRandomBalls()", () => {
  it("returns an instance of AliveBallRepository", () => {
    expect.hasAssertions();

    const billiardsTable = new BilliardsTable(160, 90);

    const actual = createRandomBalls(billiardsTable, 5);

    expect(actual).toBeInstanceOf(AliveBallRepository);
  });
});
