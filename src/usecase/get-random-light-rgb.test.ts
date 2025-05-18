import { describe, expect, it } from "vitest";

import RGB from "../domain/rgb";
import getRandomLightRGB from "./get-random-light-rgb";

describe("function getRandomLightRGB()", () => {
  it("returns an instance of RGB", () => {
    expect.hasAssertions();

    const actual = getRandomLightRGB();

    expect(actual).toBeInstanceOf(RGB);
  });
});
