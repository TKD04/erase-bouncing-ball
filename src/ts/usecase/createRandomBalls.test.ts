import { describe, expect, it } from '@jest/globals';

import BilliardsTable from "../domain/BilliardsTable";
import AliveBallRepository from "../infrastructure/AliveBallRepository";
import createRandomBalls from "./createRandomBalls";

describe("function createRandomBalls()", () => {
  it("should be an instance of AliveBallRepository", () => {
    expect.hasAssertions();

    const billiardsTable = new BilliardsTable(160, 90);

    expect(createRandomBalls(billiardsTable, 5)).toBeInstanceOf(
      AliveBallRepository
    );
  });
});
