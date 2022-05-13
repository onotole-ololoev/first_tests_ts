import {div, mult, sub, sum} from "./task";

test("sum of the values", () => {
    let a: number = 20;
    let b: number = 5;
    const result = sum(a, b);
    expect(result).toBe(25);
})

test('sub of the values', () => {
    const a = 456;
    const b = 6;
    const result = sub(a, b)
    expect(result).toBe(450);
})

test('div of the values', () => {
    let a = 15
    let b = 3
    let result = div(a, b)
    expect(result).toBe(5)
})

test('multiply of the values', () => {
    let a = 2
    let b = 20
    let result = mult(a, b)
    expect(result).toBe(40)
})