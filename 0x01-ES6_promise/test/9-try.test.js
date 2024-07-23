import guardrail from '../9-try';
import divideFunction from '../8-try';

test('guardrail appends the correct value on successful function', () => {
    const result = guardrail(() => divideFunction(10, 2));
    expect(result).toEqual([5, 'Guardrail was processed']);
});

test('guardrail appends the error message on error', () => {
    const result = guardrail(() => divideFunction(10, 0));
    expect(result).toEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
});

