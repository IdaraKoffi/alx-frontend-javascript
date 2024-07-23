import handleResponseFromAPI from '../2-then';

test('handleResponseFromAPI returns the correct object on resolve', () => {
    const promise = Promise.resolve();
    return expect(handleResponseFromAPI(promise)).resolves.toEqual({ status: 200, body: 'success' });
});

test('handleResponseFromAPI returns an empty Error object on reject', () => {
    const promise = Promise.reject();
    return expect(handleResponseFromAPI(promise)).resolves.toEqual(new Error());
});

test('handleResponseFromAPI logs "Got a response from the API"', () => {
    const promise = Promise.resolve();
    console.log = jest.fn();
    return handleResponseFromAPI(promise).finally(() => {
        expect(console.log).toHaveBeenCalledWith('Got a response from the API');
    });
});

