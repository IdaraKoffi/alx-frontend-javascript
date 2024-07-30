import getListStudents from '../0-get_list_students';

describe('getListStudents', () => {
  test('should return an array of students', () => {
    expect.assertions(1);
    const students = getListStudents();
    expect(Array.isArray(students)).toBe(true);
  });
});

