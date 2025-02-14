import Ball from "../domain/ball";
import type BilliardsTable from "../domain/billiards-table";
import Point2D from "../domain/point-2d";
import Velocity2D from "../domain/velocity-2d";
import getRandomLightRGB from "./get-random-light-rgb";
import getRandomNumber from "./get-random-number";

export default (billiardTable: BilliardsTable, id: number) => {
  const { height, width } = billiardTable;
  const [velMin, velMax] = [-7, 7];
  const radius = getRandomNumber(10, 20);

  return new Ball(
    billiardTable,
    new Point2D(
      getRandomNumber(0 + radius, width - radius),
      getRandomNumber(0 + radius, height - radius)
    ),
    new Velocity2D(
      getRandomNumber(velMin, velMax),
      getRandomNumber(velMin, velMax)
    ),
    radius,
    getRandomLightRGB(),
    id
  );
};
