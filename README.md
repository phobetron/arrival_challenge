# Senior FE Dev Questionnaire

## 1. Function Analysis

A) Iterative binary search algorithm

B) O(log(n))

C) O(1)

## 2. Compare Functions

### `fn2` vs `fn`

- Recursive binary search algorithm
- Should have no real memory complexity difference due to tail call optimization, otherwise memory complexity is O(log(n))

### `fn3` vs `fn`

- Recursive binary search algorithm
- It seems like the function can not benefit from tail call optimization
- Creation of a new array for each iteration increases memory complexity, but I believe it would still be O(log(n))

## 3. Class vs Prototype Inheritance

### Class Inheritance:

- Classes are abstract and immutable
- Classes may form strict hierarchies
- Objects are created from classes

### Prototype Inheritance:

- Prototypes are derived from concrete objects and may be mutable
- Any object may be extended from as a prototype
- Objects may inherit behavior from multiple prototypes, enabling simpler composition

## 4. Coding Challenge

```
> npm install
> npm test
```

Tests are run using Jest. A few edge cases are covered, just in case.
