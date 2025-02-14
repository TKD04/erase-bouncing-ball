import Color from "../domain/_color";
import RGB from "../domain/_rgb";
import getRandomNumber from "./get-random-number";

export default () => {
  const red = new Color(getRandomNumber(65, 254));
  const green = new Color(getRandomNumber(65, 254));
  const blue = new Color(getRandomNumber(65, 254));

  return new RGB(red, green, blue);
};
