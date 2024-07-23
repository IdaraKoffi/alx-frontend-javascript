import uploadPhoto from '../5-photo-reject';

test('uploadPhoto returns a rejected promise with the correct error', () => {
    return expect(uploadPhoto('guillaume.jpg')).rejects.toThrow('guillaume.jpg cannot be processed');
});

