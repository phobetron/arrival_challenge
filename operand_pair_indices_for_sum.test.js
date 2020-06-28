const solve = require('./operand_pair_indices_for_sum')

test('Example 1 (first two of four items)', () => {
  const nums = [2, 7, 11, 15]
  const target = 9
  const operandPairIndices = [0, 1]

  expect(solve(nums, target)).toEqual(operandPairIndices)
})

test('Example 2 (odd indices of four items)', () => {
  const nums = [17, 8, 1, 5]
  const target = 13
  const operandPairIndices = [1, 3]

  expect(solve(nums, target)).toEqual(operandPairIndices)  
})

test('last two of four items (variation of Example 1)', () => {
  const nums = [17, 8, 1, 5]
  const target = 6
  const operandPairIndices = [2, 3]

  expect(solve(nums, target)).toEqual(operandPairIndices)  
})

test('even indices of four items (variation of Example 2)', () => {
  const nums = [2, 7, 11, 15]
  const target = 13
  const operandPairIndices = [0, 2]

  expect(solve(nums, target)).toEqual(operandPairIndices)
})

test('supports 0', () => {
  const nums = [3, 5, 0, 15]
  const target = 5
  const operandPairIndices = [1, 2]

  expect(solve(nums, target)).toEqual(operandPairIndices)
})

test('supports Floats', () => {
  const nums = [1.5, 2, 3.5, 4]
  const target = 5
  const operandPairIndices = [0, 2]

  expect(solve(nums, target)).toEqual(operandPairIndices)
})

test('no valid pair exists', () => {
  const nums = [2, 7, 11, 15]
  const target = 12

  expect(() => solve(nums, target))
    .toThrowError('No valid operand pair exists for the supplied target')
})

test('fewer than 2 items supplied', () => {
  const nums = []
  const target = 1

  expect(() => solve(nums, target))
    .toThrowError('Expected Array with multiple items')
})

test('Array must only contain Numbers', () => {
  const nums = [2, '3']
  const target = 5

  expect(() => solve(nums, target))
    .toThrowError('Array must only contain numbers')
})

test('target must be a number', () => {
  const nums = [1, 2, 3, 4]
  const target = '5'

  expect(() => solve(nums, target))
    .toThrowError('Target must be a number')
})
