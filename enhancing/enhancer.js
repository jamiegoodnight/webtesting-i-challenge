// a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
// a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
// a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
// a get() method for use when working on the stretch problem.

// item = {
//   name: '',
//   durability: '',
//   enhancement: '',
// }

module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    return {
      ...item,
      enhancement: item.enhancement + 1
    };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability - 5;
  } else {
    if (item.enhancement === 15) {
      item.durability - 10;
    } else {
      item.durability - 10 && item.enhancement - 1;
    }
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
