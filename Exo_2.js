function findOddRed(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("findOddRed expects an array of integers");
  }
  if (numbers.length === 0) {
    throw new RangeError("findOddRed expects a non-empty array");
  }

  let result = 0;
  for (const value of numbers) {
    if (!Number.isInteger(value)) {
      throw new TypeError("findOddRed expects an array of integers");
    }
    result ^= value;
  }

  return result;
}

module.exports = findOddRed;
module.exports.findOddRed = findOddRed;
module.exports.findOdd = findOddRed;

if (require.main === module) {
  const assert = require("assert");

  assert.strictEqual(findOddRed([7]), 7);
  assert.strictEqual(findOddRed([0]), 0);
  assert.strictEqual(findOddRed([1, 1, 2]), 2);
  assert.strictEqual(findOddRed([0, 1, 0, 1, 0]), 0);
  assert.strictEqual(
    findOddRed([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]),
    4
  );

  assert.throws(() => findOddRed("not-an-array"), TypeError);
  assert.throws(() => findOddRed([]), RangeError);
  console.log("findOddRed tests passed");
}