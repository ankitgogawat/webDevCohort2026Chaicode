Array.prototype.myFind = function (callback) {
  // Safety check (same as native behavior)
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    // pass element, index, and full array
    if (callback(this[i], i, this)) {
      return this[i]; // return FIRST matching element
    }
  }

  // If nothing matched
  return undefined;
};

// ---------------- TESTING ----------------

const nums = [1, 2, 3, 5];

const result = nums.myFind((num) => num > 3);

console.log("Result:", result);
