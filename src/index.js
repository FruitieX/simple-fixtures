/**
 * Generate single fixture from given fields.
 *
 * Fields of function type will be evaluated, others are left untouched.
 */
export const generateFixture = (fields) => {
  const fixture = { ...fields };

  Object.keys(fixture).forEach((key) => {
    if (typeof fixture[key] === 'function') {
      fixture[key] = fixture[key]();
    }
  });

  return fixture;
};

/**
 * Generates multiple fixtures by calling generateFixture.
 *
 * Number of fixtures is given by 'count'.
 */
export const generateFixtures = (fields, count) =>
  new Array(count).fill(0).map(() => generateFixture(fields));

export default generateFixtures;
