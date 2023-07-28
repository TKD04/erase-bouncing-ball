import type BilliardsTable from "../domain/BilliardsTable";
import type IBallRepository from "../domain/IBallRepository";
import AliveBallRepository from "../infrastructure/AliveBallRepository";
import createRandomBall from "./createRandomBall";

export default (
  billiardsTable: BilliardsTable,
  numberOfBalls: number
): IBallRepository => {
  if (numberOfBalls <= 0) {
    throw new RangeError("numberOfBalls must be greater than zero.");
  }

  const aliveBallRepository = new AliveBallRepository();

  for (let i = 0; i < numberOfBalls; i += 1) {
    const ball = createRandomBall(billiardsTable, i);
    aliveBallRepository.add(i, ball);
  }

  return aliveBallRepository;
};
