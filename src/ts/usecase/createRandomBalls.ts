import type Ball from "../domain/Ball";
import type BilliardsTable from "../domain/BilliardsTable";
import createRandomBall from "./createRandomBall";

export default (
  billiardsTable: BilliardsTable,
  numberOfBalls: number
): Ball[] => {
  if (numberOfBalls <= 0) {
    throw new RangeError("numberOfBalls must be greater than zero.");
  }

  const balls: Ball[] = [];

  for (let i = 0; i < numberOfBalls; i += 1) {
    const ball = createRandomBall(billiardsTable);
    balls.push(ball);
  }

  return balls;
};
