import HolbertonCourse from '../2-hbtn_course';

test('HolbertonCourse initializes with correct properties', () => {
  const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
  expect(course.name).toBe('ES6');
  expect(course.length).toBe(1);
  expect(course.students).toEqual(['Bob', 'Jane']);
});

test('HolbertonCourse throws error with invalid name type', () => {
  expect(() => new HolbertonCourse(12, 1, ['Bob', 'Jane'])).toThrow(TypeError);
});

test('HolbertonCourse throws error with invalid length type', () => {
  expect(() => new HolbertonCourse('ES6', '1', ['Bob', 'Jane'])).toThrow(TypeError);
});

test('HolbertonCourse throws error with invalid students type', () => {
  expect(() => new HolbertonCourse('ES6', 1, 'Bob')).toThrow(TypeError);
});

