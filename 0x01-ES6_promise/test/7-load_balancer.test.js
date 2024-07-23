import loadBalancer from '../7-load_balancer';

test('loadBalancer returns the value of the first resolved promise', () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 100));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 200));
    return expect(loadBalancer(promise1, promise2)).resolves.toBe('Promise 1');
});

test('loadBalancer returns the value of the second resolved promise if it resolves first', () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 200));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 100));
    return expect(loadBalancer(promise1, promise2)).resolves.toBe('Promise 2');
});

