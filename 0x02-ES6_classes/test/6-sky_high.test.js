import SkyHighBuilding from '../6-sky_high';

test('SkyHighBuilding initializes with correct properties', () => {
  const building = new SkyHighBuilding(140, 60);
  expect(building.sqft).toBe(140);
  expect(building.floors).toBe(60);
});

test('evacuationWarningMessage returns correct message', () => {
  const building = new SkyHighBuilding(140, 60);
  expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 60 floors');
});

