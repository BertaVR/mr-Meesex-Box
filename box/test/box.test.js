const { expect } = require('@jest/globals');

const factory = require('../src/box');


test("Box name should be Rick's box", () => {
let box = factory.singletonBox.getBox();
expect(box.name).toEqual("Rick's box")
});

test('Mr Meeseex should be null when creating a box', () => {
    let emptyBox = factory.singletonBox.getBox();
    expect(emptyBox.mrMeeseeks).toBe(null);
    });



test('Mr Meeseex should have a Meeseeks if we create it ', () => {
    let boxWithMeeseeks = factory.singletonBox.getBox();
    boxWithMeeseeks.createMrMeeseeks();
    expect(boxWithMeeseeks.mrMeeseeks).not.toBe(null);
    });

test('Factory returns always the same box: singleton', () => {

    let firstBox = factory.singletonBox.getBox();
    let SecondBox = factory.singletonBox.getBox();
    expect(firstBox).toEqual(SecondBox);
});


test('Meeseeks should be pushed to reality when button ios pressed', () => {
    let reality = []
    expect(reality).toHaveLength(0);

    let boxButton = factory.singletonBox.getBox();
    boxButton.pressButton(reality);
    expect(reality).toHaveLength(1);
    boxButton.pressButton(reality);
    expect(reality).toHaveLength(2);
    boxButton.pressButton(reality);
    expect(reality).toHaveLength(3);



});