const { succeed, fail, repair } = require("./enhancer.js");
// test away!

const magicSword = {
  name: "Magic Sword",
  durability: 5,
  enhancement: 6
};

const ironSword = {
  name: "Iron Sword",
  durability: 25,
  enhancement: 15
};

const fireSword = {
  name: "Fire Sword",
  durability: 50,
  enhancement: 20
};

const rustySword = {
  name: "Rusty Sword",
  durability: 23,
  enhancement: 16
};

// REPAIR

it("should return the item's durability equal to 100", () => {
  expect(repair(magicSword)).toEqual({ ...magicSword, durability: 100 });
  expect(repair(fireSword)).toEqual({ ...fireSword, durability: 100 });
});

// SUCCEED
