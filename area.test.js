const getArea = require('./area');

test('Just below minimum accepted value for sides[0]', () => {
  expect(getArea([-1, 10])).toBe(-1);
});

test('Just below minimum accepted value for sides[1]', () => {
  expect(getArea([10, -1])).toBe(-1);
});

test('Minimum accepted value for sides[0]', () => {
  expect(getArea([0, 10])).toBe(0);
});

test('Minimum accepted value for sides[1]', () => {
  expect(getArea([10, 0])).toBe(0);
});

test('Just above minimum accepted value for sides[0]', () => {
  expect(getArea([1, 10])).toBe(10);
});

test('Just above minimum accepted value for sides[1]', () => {
  expect(getArea([10, 1])).toBe(10);
});

test('Nominal value for sides[0]', () => {
  expect(getArea([3, 10])).toBe(30);
});

test('Nominal value for sides[1]', () => {
  expect(getArea([10, 3])).toBe(30);
});

test('Non-integer value for sides[0]', () => {
  expect(getArea(['a', 10])).toBe(-1);
});

test('Non-integer value for sides[1]', () => {
  expect(getArea([10, 'a'])).toBe(-1);
});

test('Passing parameters as two values instead of an array', () => {
  expect(getArea((3, 10))).toBe(-1);
});

test('Passing less array values than expected', () => {
  expect(getArea([10])).toBe(-1);
});

test('Passing more array values than expected', () => {
  expect(getArea([10, 3, 5])).toBe(-1);
});

test('Passing 10 values below the minimim accepted value', () => {
  for (var i = -9; i < 0; i++) {
    expect(getArea([10, i])).toBe(-1);
  }
});

test('Passing 10 values above the minimim accepted value', () => {
  for (var i = 0; i < 9; i++) {
    expect(getArea([10, i])).toBe(10*i);
  }
});


