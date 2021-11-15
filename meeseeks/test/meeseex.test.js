const { expect } = require('@jest/globals');
const factory = require('../src/meeseeks');


test('Meeseeks should exist when created', () => {

    let firstMeeseeks = factory.singleMrMeeseeks.get();
    let secondMeeseeks = factory.singleMrMeeseeks.get();
    expect(firstMeeseeks).toEqual(secondMeeseeks);
});

