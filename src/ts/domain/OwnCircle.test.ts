import { describe, expect, it } from '@jest/globals';

import BilliardsTable from "./BilliardsTable";
import OwnCircle from "./OwnCircle";

describe("class OwnCircle", () => {
  describe("constructor()", () => {
    it("should be an instance of OwnCircle", () => {
      expect.hasAssertions();

      const billiardsTable = new BilliardsTable(160, 90);

      expect(new OwnCircle(billiardsTable)).toBeInstanceOf(OwnCircle);
    });
  });

  describe("get x()", () => {
    it("x should be 80", () => {
      expect.hasAssertions();

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      expect(ownCircle.x).toBe(80);
    });
  });

  describe("get y()", () => {
    it("y should be 45", () => {
      expect.hasAssertions();

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      expect(ownCircle.y).toBe(45);
    });
  });

  describe("get radius()", () => {
    it("radius should be 10", () => {
      expect.hasAssertions();

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      expect(ownCircle.radius).toBe(10);
    });
  });

  describe("get color()", () => {
    it("color should be rgb(254, 254, 254)", () => {
      expect.hasAssertions();

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      expect(ownCircle.color).toBe("rgb(254, 254, 254)");
    });
  });

  describe("moveToUp()", () => {
    it("[x, y] should be [80, 25] when ownCircle does not collide with the top wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToUp();

      expect(ownCircle.x).toBe(80);
      expect(ownCircle.y).toBe(25);
    });

    it("[x, y] should be [80, 10] when ownCircle collides with the top wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 40);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToUp();

      expect(ownCircle.x).toBe(80);
      expect(ownCircle.y).toBe(10);
    });

    it("[x, y] should be [80, 10] when ownCircle on the top wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 20);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToUp();

      expect(ownCircle.x).toBe(80);
      expect(ownCircle.y).toBe(10);
    });
  });

  describe("moveToDown()", () => {
    it("[x, y] should be [80, 65] when ownCircle does not collide with the bottom wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToDown();

      expect(ownCircle.x).toBe(80);
      expect(ownCircle.y).toBe(65);
    });

    it("[x, y] should be [80, 30] when ownCircle collides with the bottom wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 40);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToDown();

      expect(ownCircle.x).toBe(80);
      expect(ownCircle.y).toBe(30);
    });

    it("[x, y] should be [80, 10] when ownCircle on the bottom wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 20);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToDown();

      expect(ownCircle.x).toBe(80);
      expect(ownCircle.y).toBe(10);
    });
  });

  describe("moveToLeft()", () => {
    it("[x, y] should be [60, 45] when ownCircle does not collide with the left wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToLeft();

      expect(ownCircle.x).toBe(60);
      expect(ownCircle.y).toBe(45);
    });

    it("[x, y] should be [10, 45] when ownCircle collides with the left wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(40, 90);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToLeft();

      expect(ownCircle.x).toBe(10);
      expect(ownCircle.y).toBe(45);
    });

    it("[x, y] should be [10, 45] when ownCircle on the left wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(20, 90);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToLeft();

      expect(ownCircle.x).toBe(10);
      expect(ownCircle.y).toBe(45);
    });
  });

  describe("moveToRight()", () => {
    it("[x, y] should be [100, 45] when ownCircle does not collide with the right wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToRight();

      expect(ownCircle.x).toBe(100);
      expect(ownCircle.y).toBe(45);
    });

    it("[x, y] should be [30, 45] when ownCircle collides with the right wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(40, 90);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToRight();

      expect(ownCircle.x).toBe(30);
      expect(ownCircle.y).toBe(45);
    });

    it("[x, y] should be [10, 45] when ownCircle on the right wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(20, 90);
      const ownCircle = new OwnCircle(billiardsTable);
      ownCircle.moveToRight();

      expect(ownCircle.x).toBe(10);
      expect(ownCircle.y).toBe(45);
    });
  });
});
