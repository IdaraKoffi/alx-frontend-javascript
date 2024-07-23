import handleProfileSignup from '../3-all';
const { uploadPhoto, createUser } = require('../utils');

test('handleProfileSignup logs the correct output on success', async () => {
    console.log = jest.fn();
    await handleProfileSignup();
    expect(console.log).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
});

test('handleProfileSignup logs "Signup system offline" on error', async () => {
    const originalUploadPhoto = uploadPhoto;
    const originalCreateUser = createUser;
    require('../utils').uploadPhoto = jest.fn(() => Promise.reject());
    require('../utils').createUser = jest.fn(() => Promise.reject());
    console.log = jest.fn();
    await handleProfileSignup();
    expect(console.log).toHaveBeenCalledWith('Signup system offline');
    require('../utils').uploadPhoto = originalUploadPhoto;
    require('../utils').createUser = originalCreateUser;
});

