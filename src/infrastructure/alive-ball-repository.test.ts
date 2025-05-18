import { describe, expect, it } from "vitest";

import Ball from "../domain/ball";
import BilliardsTable from "../domain/billiards-table";
import Color from "../domain/color";
import Point2D from "../domain/point-2d";
import RGB from "../domain/rgb";
import Velocity2D from "../domain/velocity-2d";
import AliveBallRepository from "./alive-ball-repository";

const billiardsTable = new BilliardsTable(160, 90);
const createBallA = () =>
  new Ball(
    billiardsTable,
    new Point2D(0, 0),
    new Velocity2D(1, 1),
    10,
    new RGB(new Color(225), new Color(225), new Color(225)),
    0
  );
const createBallB = () =>
  new Ball(
    billiardsTable,
    new Point2D(0, 0),
    new Velocity2D(1, 1),
    10,
    new RGB(new Color(225), new Color(225), new Color(225)),
    1
  );
const createBallC = () =>
  new Ball(
    billiardsTable,
    new Point2D(0, 0),
    new Velocity2D(1, 1),
    10,
    new RGB(new Color(225), new Color(225), new Color(225)),
    2
  );

describe("class AliveBallRepository", () => {
  describe("get length", () => {
    it("length is equal to 0", () => {
      expect.assertions(1);

      const aliveBallRepository = new AliveBallRepository();

      const actual = aliveBallRepository.length;

      expect(actual).toBe(0);
    });

    it("length is equal to 3", () => {
      expect.assertions(1);

      const aliveBallRepository = new AliveBallRepository();
      const ballA = createBallA();
      const ballB = createBallB();
      const ballC = createBallC();
      aliveBallRepository.add(ballA.id, ballA);
      aliveBallRepository.add(ballB.id, ballB);
      aliveBallRepository.add(ballC.id, ballC);

      const actual = aliveBallRepository.length;

      expect(actual).toBe(3);
    });
  });

  describe("constructor()", () => {
    it("returns an instance of AliveBallRepository", () => {
      expect.assertions(1);

      const actual = new AliveBallRepository();

      expect(actual).toBeInstanceOf(AliveBallRepository);
    });
  });

  describe("getAll()", () => {
    it("is matched to the empty Ball array", () => {
      expect.assertions(1);

      const aliveBallRepository = new AliveBallRepository();
      const noBalls: readonly Ball[] = [];

      const actual = aliveBallRepository.getAll();

      expect(actual).toStrictEqual(noBalls);
    });
  });

  describe("add()", () => {
    it("is matched to the Ball array", () => {
      expect.assertions(1);

      const aliveBallRepository = new AliveBallRepository();
      const ballA = createBallA();
      const ballB = createBallB();
      const ballC = createBallC();
      const balls: readonly Ball[] = [ballA, ballB, ballC];

      aliveBallRepository.add(ballA.id, ballA);
      aliveBallRepository.add(ballB.id, ballB);
      aliveBallRepository.add(ballC.id, ballC);
      const actual = aliveBallRepository.getAll();

      expect(actual).toStrictEqual(balls);
    });

    it("thows an error if ballId is already in place", () => {
      expect.assertions(1);

      const aliveBallRepository = new AliveBallRepository();
      const ballA = createBallA();
      aliveBallRepository.add(1, ballA);

      expect(() => {
        aliveBallRepository.add(1, ballA);
      }).toThrow(new Error("ballId 1 is already in place."));
    });
  });

  describe("remove()", () => {
    it("is matched to the Ball array", () => {
      expect.assertions(1);

      const aliveBallRepository = new AliveBallRepository();
      const ballA = createBallA();
      const ballB = createBallB();
      const ballC = createBallC();
      const balls: readonly Ball[] = [ballA, ballC];

      aliveBallRepository.add(ballA.id, ballA);
      aliveBallRepository.add(ballB.id, ballB);
      aliveBallRepository.add(ballC.id, ballC);
      aliveBallRepository.remove(1);
      const actual = aliveBallRepository.getAll();

      expect(actual).toStrictEqual(balls);
    });

    it("throws an error if the key does not exist", () => {
      expect.assertions(1);

      const aliveBallRepository = new AliveBallRepository();
      const ballA = createBallA();

      aliveBallRepository.add(ballA.id, ballA);

      expect(() => {
        aliveBallRepository.remove(1);
      }).toThrow(new RangeError("ballId must be in the keys."));
    });
  });
});
