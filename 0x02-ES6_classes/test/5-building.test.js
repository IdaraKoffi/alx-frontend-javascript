import Building from '../5-building';

test('Building initializes with correct sqft', () => {
  const building = new Building(100);
  expect(building.sqft).toBe(100);
});

test('Building throws error if evacuationWarningMessage is not overridden', () => {
  expect(() => new Building(100).evacuationWarningMessage()).toThrow(Error);
});

