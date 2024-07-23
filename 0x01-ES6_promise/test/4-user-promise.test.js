import signUpUser from '../4-user-promise';

test('signUpUser returns a resolved promise with the correct object', () => {
    return expect(signUpUser('Bob', 'Dylan')).resolves.toEqual({ firstName: 'Bob', lastName: 'Dylan' });
});

