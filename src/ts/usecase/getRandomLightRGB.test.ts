import RGB from "../domain/RGB";
import getRandomLightRGB from "./getRandomLightRGB";

describe("function getRandomLightRGB()", () => {
  it("should be an instance of RGB", () => {
    expect.hasAssertions();
    expect(getRandomLightRGB()).toBeInstanceOf(RGB);
  });
});
