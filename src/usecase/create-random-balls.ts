import type BallRepository from "../domain/ball-repository";
import type BilliardsTable from "../domain/billiards-table";
import AliveBallRepository from "../infrastructure/alive-ball-repository";
import createRandomBall from "./create-random-ball";

const createRandomBalls = (
  billiardsTable: BilliardsTable,
  numberOfBalls: number
): BallRepository => {
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

export default createRandomBalls;
