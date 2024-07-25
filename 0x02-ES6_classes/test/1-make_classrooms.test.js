import initializeRooms from '../1-make_classrooms';

test('initializeRooms creates 3 ClassRoom objects', () => {
  const rooms = initializeRooms();
  expect(rooms.length).toBe(3);
  expect(rooms[0]._maxStudentsSize).toBe(19);
  expect(rooms[1]._maxStudentsSize).toBe(20);
  expect(rooms[2]._maxStudentsSize).toBe(34);
});

