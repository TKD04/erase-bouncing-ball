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

  for (let index = 0; index < numberOfBalls; index += 1) {
    const ball = createRandomBall(billiardsTable, index);
    aliveBallRepository.add(index, ball);
  }

  return aliveBallRepository;
};
