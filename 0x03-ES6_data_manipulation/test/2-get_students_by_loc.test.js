import getStudentsByLocation from '../2-get_students_by_loc.js';
import getListStudents from '../0-get_list_students.js';

test('getStudentsByLocation returns students in a specific location', () => {
  const students = getListStudents();
  const expected = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  expect(getStudentsByLocation(students, 'San Francisco')).toStrictEqual(expected);
});

test('getStudentsByLocation returns an empty array for location with no students', () => {
  const students = getListStudents();
  expect(getStudentsByLocation(students, 'New York')).toStrictEqual([]);
});
