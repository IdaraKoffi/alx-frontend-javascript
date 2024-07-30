import getListStudentIds from '../1-get_list_student_ids.js';
import getListStudents from '../0-get_list_students.js';

test('getListStudentIds returns the correct array of student ids', () => {
  const students = getListStudents();
  const expected = [1, 2, 5];
  expect(getListStudentIds(students)).toStrictEqual(expected);
});

test('getListStudentIds returns an empty array for invalid input', () => {
  expect(getListStudentIds('invalid input')).toStrictEqual([]);
});
