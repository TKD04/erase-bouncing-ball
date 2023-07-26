import Color from "../domain/Color";
import RGB from "../domain/RGB";
import getRandomNumber from "./getRandomNumber";

export default () => {
  const red = new Color(getRandomNumber(65, 254));
  const green = new Color(getRandomNumber(65, 254));
  const blue = new Color(getRandomNumber(65, 254));

  return new RGB(red, green, blue);
};
