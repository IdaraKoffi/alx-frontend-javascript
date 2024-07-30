import updateStudentGradeByCity from '../4-update_grade_by_city.js';
import getListStudents from '../0-get_list_students.js';

test('updateStudentGradeByCity updates student grades correctly', () => {
  const students = getListStudents();
  const newGrades = [
    { studentId: 1, grade: 78 },
    { studentId: 5, grade: 92 },
  ];
  const updatedStudents = updateStudentGradeByCity(students, 'San Francisco', newGrades);
  const expected = [
    {
      id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 78,
    },
    { id: 2, firstName: 'James', location: 'Columbia' },
    {
      id: 5, firstName: 'Serena', location: 'San Francisco', grade: 92,
    },
  ];
  expect(updatedStudents).toStrictEqual(expected);
});
