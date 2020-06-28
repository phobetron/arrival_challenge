/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
function solve(nums, target) {
  if (nums.length < 2) {
    throw 'Expected Array with multiple items'
  }

  if (!nums.every((num) => typeof num === 'number')) {
    throw 'Array must only contain numbers'
  }

  if (typeof target !== 'number') {
    throw 'Target must be a number'
  }

  const hash = {}

  for (i = 0; i < nums.length; i++) {
    if ((target - nums[i]) in hash) {
      return [hash[target - nums[i]], i]
    }

    hash[nums[i]] = i
  }

  throw 'No valid operand pair exists for the supplied target'
}

module.exports = solve
