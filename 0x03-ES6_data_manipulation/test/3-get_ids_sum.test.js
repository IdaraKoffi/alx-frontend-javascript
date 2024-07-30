import getStudentIdsSum from '../3-get_ids_sum.js';
import getListStudents from '../0-get_list_students.js';

test('getStudentIdsSum returns the sum of student ids', () => {
  const students = getListStudents();
  const expected = 1 + 2 + 5;
  expect(getStudentIdsSum(students)).toBe(expected);
});
