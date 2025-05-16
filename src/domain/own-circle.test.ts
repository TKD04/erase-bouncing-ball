import { describe, expect, it } from "vitest";

import BilliardsTable from "./billiards-table";
import OwnCircle from "./own-circle";

describe("class OwnCircle", () => {
  describe("constructor()", () => {
    it("returns an instance of OwnCircle", () => {
      expect.assertions(1);

      const billiardsTable = new BilliardsTable(160, 90);

      const actual = new OwnCircle(billiardsTable);

      expect(actual).toBeInstanceOf(OwnCircle);
    });
  });

  describe("get x()", () => {
    it("x is 80", () => {
      expect.assertions(1);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      const actual = ownCircle.x;

      expect(actual).toBe(80);
    });
  });

  describe("get y()", () => {
    it("y is 45", () => {
      expect.assertions(1);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      const actual = ownCircle.y;

      expect(actual).toBe(45);
    });
  });

  describe("get radius()", () => {
    it("radius is 10", () => {
      expect.assertions(1);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      const actual = ownCircle.radius;

      expect(actual).toBe(10);
    });
  });

  describe("get color()", () => {
    it("color is rgb(254, 254, 254)", () => {
      expect.assertions(1);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      const actual = ownCircle.color;

      expect(actual).toBe("rgb(254, 254, 254)");
    });
  });

  describe("moveToUp()", () => {
    it("[x, y] is [80, 25] if ownCircle does not collide with the top wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToUp();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(80);
      expect(actualY).toBe(25);
    });

    it("[x, y] is [80, 10] if ownCircle collides with the top wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 40);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToUp();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(80);
      expect(actualY).toBe(10);
    });

    it("[x, y] is [80, 10] if ownCircle on the top wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 20);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToUp();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(80);
      expect(actualY).toBe(10);
    });
  });

  describe("moveToDown()", () => {
    it("[x, y] is [80, 65] if ownCircle does not collide with the bottom wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToDown();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(80);
      expect(actualY).toBe(65);
    });

    it("[x, y] is [80, 30] if ownCircle collides with the bottom wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 40);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToDown();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(80);
      expect(actualY).toBe(30);
    });

    it("[x, y] is [80, 10] if ownCircle on the bottom wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 20);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToDown();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(80);
      expect(actualY).toBe(10);
    });
  });

  describe("moveToLeft()", () => {
    it("[x, y] is [60, 45] if ownCircle does not collide with the left wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToLeft();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(60);
      expect(actualY).toBe(45);
    });

    it("[x, y] is [10, 45] if ownCircle collides with the left wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(40, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToLeft();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(10);
      expect(actualY).toBe(45);
    });

    it("[x, y] is [10, 45] if ownCircle on the left wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(20, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToLeft();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(10);
      expect(actualY).toBe(45);
    });
  });

  describe("moveToRight()", () => {
    it("[x, y] is [100, 45] if ownCircle does not collide with the right wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(160, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToRight();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(100);
      expect(actualY).toBe(45);
    });

    it("[x, y] is [30, 45] if ownCircle collides with the right wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(40, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToRight();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(30);
      expect(actualY).toBe(45);
    });

    it("[x, y] is [10, 45] if ownCircle on the right wall", () => {
      expect.assertions(2);

      const billiardsTable = new BilliardsTable(20, 90);
      const ownCircle = new OwnCircle(billiardsTable);

      ownCircle.moveToRight();
      const actualX = ownCircle.x;
      const actualY = ownCircle.y;

      expect(actualX).toBe(10);
      expect(actualY).toBe(45);
    });
  });
});
