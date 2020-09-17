const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe(".repair", () => {
    it("can be repaired", function () {
      const item = {
        name: "The Great Game",
        durability: "80",
        enhancement: 0,
      };
      const repairedItem = enhancer.repair(item);
      expect(repairedItem.durability).toBe(100);
    });
  });
  describe(".success()", () => {
    it("can be enhanced", function () {
      const item = {
        name: "The Great Game",
        durability: "80",
        enhancement: 0,
      };
      const enhancedItem = enhancer.success(item);
      expect(enhancedItem.enhancement).toBe(1);
    });
  });

  describe(".fail()", () => {
    it("can fail", function () {
      const item = {
        name: "The Great Game",
        durability: "87",
        enhancement: 18,
      };
      const failedItem = enhancer.fail(item);
      expect(failedItem.durability).toBe(77);
      expect(failedItem.enhancement).toBe(17);
    });
  });
});
