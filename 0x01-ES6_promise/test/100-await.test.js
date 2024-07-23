import asyncUploadUser from '../100-await';
const { uploadPhoto } = require('../utils');

test('asyncUploadUser returns the correct object on success', async () => {
    const result = await asyncUploadUser();
    expect(result).toEqual({
        photo: { status: 200, body: 'photo-profile-1' },
        user: { firstName: 'Guillaume', lastName: 'Salva' }
    });
});

test('asyncUploadUser returns an empty object on failure', async () => {
    const originalUploadPhoto = uploadPhoto;
    require('../utils').uploadPhoto = jest.fn(() => Promise.reject());
    const result = await asyncUploadUser();
    expect(result).toEqual({
        photo: null,
        user: null
    });
    require('../utils').uploadPhoto = originalUploadPhoto;
});

