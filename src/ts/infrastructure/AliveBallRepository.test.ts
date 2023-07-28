import Ball from "../domain/Ball";
import BilliardsTable from "../domain/BilliardsTable";
import Color from "../domain/Color";
import Point2D from "../domain/Point2D";
import RGB from "../domain/RGB";
import Velocity2D from "../domain/Velocity2D";
import AliveBallRepository from "./AliveBallRepository";

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
      const noBalls: ReadonlyArray<Ball> = [];
      expect(aliveBallRepository.getAll()).toMatchObject(noBalls);
    });
  });

  describe("add()", () => {
    it("should be matched to the Ball array", () => {
      expect.hasAssertions();
      const aliveBallRepository = new AliveBallRepository();
      const balls: ReadonlyArray<Ball> = [ballA, ballB, ballC];
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
      const balls: ReadonlyArray<Ball> = [ballA, ballC];
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
      expect(() => aliveBallRepository.remove(1)).toThrow(
        new RangeError("ballId must be in the keys.")
      );
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
