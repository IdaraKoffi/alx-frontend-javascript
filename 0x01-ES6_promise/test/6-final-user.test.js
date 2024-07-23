import handleProfileSignup from '../6-final-user';

test('handleProfileSignup returns an array with the correct structure', () => {
    return handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg').then((results) => {
        expect(results).toEqual([
            { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
            { status: 'rejected', value: expect.any(Error) }
        ]);
    });
});

