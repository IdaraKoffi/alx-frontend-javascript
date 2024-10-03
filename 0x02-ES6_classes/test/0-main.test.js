import ClassRoom from '../0-classroom';

describe('ClassRoom', () => {
  test('should create a ClassRoom instance with the correct max size', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});

