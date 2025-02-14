import { describe, expect, it } from "@jest/globals";

import Ball from "../domain/ball";
import BilliardsTable from "../domain/billiards-table";
import Color from "../domain/color";
import Point2D from "../domain/point-2d";
import RGB from "../domain/rgb";
import Velocity2D from "../domain/velocity-2d";
import AliveBallRepository from "./alive-ball-repository";

const billiardsTable = new BilliardsTable(160, 90);
const ballA = new Ball(
  billiardsTable,
  new Point2D(0, 0),
  new Velocity2D(1, 1),
  10,
  new RGB(new Color(225), new Color(225), new Color(225)),
  0
);
const ballB = new Ball(
  billiardsTable,
  new Point2D(0, 0),
  new Velocity2D(1, 1),
  10,
  new RGB(new Color(225), new Color(225), new Color(225)),
  1
);
const ballC = new Ball(
  billiardsTable,
  new Point2D(0, 0),
  new Velocity2D(1, 1),
  10,
  new RGB(new Color(225), new Color(225), new Color(225)),
  2
);

describe("class AliveBallRepository", () => {
  describe("constructor()", () => {
    it("should be an instance of AliveBallRepository", () => {
      expect.hasAssertions();
      expect(new AliveBallRepository()).toBeInstanceOf(AliveBallRepository);
    });
  });

  describe("getAll()", () => {
    it("should be matched to the empty Ball array", () => {
      expect.hasAssertions();

      const aliveBallRepository = new AliveBallRepository();
      const noBalls: readonly Ball[] = [];

      expect(aliveBallRepository.getAll()).toMatchObject(noBalls);
    });
  });

  describe("add()", () => {
    it("should be matched to the Ball array", () => {
      expect.hasAssertions();

      const aliveBallRepository = new AliveBallRepository();
      const balls: readonly Ball[] = [ballA, ballB, ballC];
      aliveBallRepository.add(ballA.id, ballA);
      aliveBallRepository.add(ballB.id, ballB);
      aliveBallRepository.add(ballC.id, ballC);

      expect(aliveBallRepository.getAll()).toMatchObject(balls);
    });
  });

  describe("remove()", () => {
    it("should be matched to the Ball array", () => {
      expect.hasAssertions();

      const aliveBallRepository = new AliveBallRepository();
      const balls: readonly Ball[] = [ballA, ballC];
      aliveBallRepository.add(ballA.id, ballA);
      aliveBallRepository.add(ballB.id, ballB);
      aliveBallRepository.add(ballC.id, ballC);
      aliveBallRepository.remove(1);

      expect(aliveBallRepository.getAll()).toMatchObject(balls);
    });

    it("should be throw an error if the key does not exist", () => {
      expect.hasAssertions();

      const aliveBallRepository = new AliveBallRepository();
      aliveBallRepository.add(ballA.id, ballA);

      expect(() => {
        aliveBallRepository.remove(1);
      }).toThrow(new RangeError("ballId must be in the keys."));
    });
  });

  describe("length()", () => {
    it("length should be equal to 0", () => {
      expect.hasAssertions();

      const aliveBallRepository = new AliveBallRepository();

      expect(aliveBallRepository.length()).toBe(0);
    });

    it("length should be equal to 3", () => {
      expect.hasAssertions();

      const aliveBallRepository = new AliveBallRepository();
      aliveBallRepository.add(ballA.id, ballA);
      aliveBallRepository.add(ballB.id, ballB);
      aliveBallRepository.add(ballC.id, ballC);

      expect(aliveBallRepository.length()).toBe(3);
    });
  });
});
