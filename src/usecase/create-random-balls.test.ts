import { describe, expect, it } from "@jest/globals";

import BilliardsTable from "../domain/billiards-table";
import AliveBallRepository from "../infrastructure/alive-ball-repository";
import createRandomBalls from "./create-random-balls";

describe("function createRandomBalls()", () => {
  it("should be an instance of AliveBallRepository", () => {
    expect.hasAssertions();

    const billiardsTable = new BilliardsTable(160, 90);

    expect(createRandomBalls(billiardsTable, 5)).toBeInstanceOf(
      AliveBallRepository
    );
  });
});
