import getResponseFromAPI from '../0-promise';

test('getResponseFromAPI returns a Promise', () => {
    expect(getResponseFromAPI()).toBeInstanceOf(Promise);
});

