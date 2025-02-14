import { describe, expect, it } from "@jest/globals";

import RGB from "../domain/rgb";
import getRandomLightRGB from "./get-random-light-rgb";

describe("function getRandomLightRGB()", () => {
  it("should be an instance of RGB", () => {
    expect.hasAssertions();
    expect(getRandomLightRGB()).toBeInstanceOf(RGB);
  });
});
