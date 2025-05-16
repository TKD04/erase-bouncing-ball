import { describe, expect, it } from "vitest";

import getRandomNumber from "./get-random-number";

describe("function getRandomNumber()", () => {
  it("returns a number in the range of 5-10", () => {
    expect.assertions(2);

    const actual = getRandomNumber(5, 10);

    expect(actual).toBeGreaterThanOrEqual(5);
    expect(actual).toBeLessThanOrEqual(10);
  });
});
