
/**
 * cases
 */

var cases = [];

/**
 * 1
 */

cases.push([
  '<input type="text" name="baz">',
  'should be submittable',
  true
]);

/**
 * 2
 */

cases.push([
  '<select></select>',
  'should not be submittable',
  false
]);

/**
 * 3
 */

cases.push([
  '<input type="checkbox" name="baz" checked>',
  'should be submittable',
  true
]);

/**
 * 4
 */

cases.push([
  '<input type="submit" name="foo">',
  'should not be submittable',
  false
]);
