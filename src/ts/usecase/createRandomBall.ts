import Ball from "../domain/Ball";
import type BilliardsTable from "../domain/BilliardsTable";
import Point2D from "../domain/Point2D";
import Velocity2D from "../domain/Velocity2D";
import getRandomLightRGB from "./getRandomLightRGB";
import getRandomNumber from "./getRandomNumber";

export default (billiardTable: BilliardsTable) => {
  const { width, height } = billiardTable;
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
    getRandomLightRGB()
  );
};
