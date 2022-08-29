const functions = require('./functions.js');

test("Checking returnTwo", () => {
    expect(2).toBe(2);
});

test("Checking greeting", () => {
    expect(functions.greeting('James')).toBe("Hello, James"),
    expect(functions.greeting('Jill')).toBe("Hello, Jill")
});

test("checking add", () => {
    expect(functions.add(1,2)).toBe(3),
    expect(functions.add(5,9)).toBe(14)
});

test("checking sub", () => {
    expect(functions.subtract(2,1)).toBe(1),
    expect(functions.multiply(5,5)).toBe(25),
    expect(functions.divide(10,5)).toBe(2)
});