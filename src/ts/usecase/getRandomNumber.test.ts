import getRandomNumber from "./getRandomNumber";

describe("function getRandomNumber()", () => {
  it("randomNumber should be in the range of 5-10", () => {
    expect.assertions(2);
    const randomNumber = getRandomNumber(5, 10);
    expect(randomNumber).toBeGreaterThanOrEqual(5);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });
});
