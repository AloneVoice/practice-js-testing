import randomNumber from './app';
it('For 1 and 1 should return 1', () => {
    expect(randomNumber(1, 1)).toBe(1)
})

it('For s and x should return error', () => {
    expect(() => randomNumber('s', 'x')).toThrow(Error)
})

it('For 2 and 1 should return error', () => {
    expect(() => randomNumber(2, 1)).toThrow(Error)
})

it('For 1 and 4 should be grater or equal 1', () => {
    expect(randomNumber(1, 4)).toBeGreaterThanOrEqual(1);
})

it('For 1 and 1 should be less or eqal 4', () => {
    expect(randomNumber(1, 4)).toBeLessThanOrEqual(4);
})