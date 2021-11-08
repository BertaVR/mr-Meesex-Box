/**
 * Las historias de usuario a programar
 * se encuentran aqui:
 * https://www.youtube.com/watch?v=qUYvIAP3qQk
 */

// node.js modules
// importamos el singleton de la clase Box
// Si box es un paquete, es suficiente con 
// require del directorio que la contiene 
var importaBox = require('./box');

// create two boxes: it's the same one - singleton
var factoriaBox = importaBox.singletonBox;
var box = factoriaBox.getBox();
console.log(box.name);

var box2 = factoriaBox.getBox();
console.log(box2.name);

//  are boxes the same? assertion:
console.assert(box === box2);
box2.name = "Jen's box";
console.log(box.name);


// create two Meeseeks (copies): they are expected to be different 
// protomeeseeks should not change
var mrMeeseeks = box.createMrMeeseeks();

var mrMeeseeks2 = box.createMrMeeseeks();
mrMeeseeks2.messageOnCreate = "Caaaan dooooo!!";

console.assert(mrMeeseeks !== mrMeeseeks2);
console.assert(mrMeeseeks.messageOnCreate != mrMeeseeks2.messageOnCreate);


// assert that message on create DOES NOT change for the protomeeseeks
var proto = box.getProtoMeeseeks();
console.assert(proto.messageOnCreate == "I'm Mr Meeseeks! Look at meeee!");
console.assert(proto != mrMeeseeks);


// Meeseeks are added to reality
var reality = [];

console.log("\n ### Jerry press button ### \n");

box.pressButton(reality);
console.assert(reality.length == 1); // a meeseeks should be pushed to reality

console.log("Rick: Open Jerry's stupid mayonnaise jar");
var lastMrMeeseeks = reality.length - 1; 
reality[lastMrMeeseeks].makeRequest("open", "Jerry's stupid mayonnaise jar");
reality[lastMrMeeseeks].fulfillRequest();
// meeseeks disappears from existance (reality) when the request is fulfilled
reality.pop();
console.assert(reality.length == 0);

console.log("\n ### Summer press button ### \n");

box.pressButton(reality);
console.assert(reality.length == 1);
console.log("Summer: I wanna be popular at school!");
reality[lastMrMeeseeks].makeRequest("be popular", "at school");
reality[lastMrMeeseeks].fulfillRequest();
reality.pop();
console.assert(reality.length == 0);

console.log("\n ### Beth press button ### \n");

box.pressButton(reality);
console.log("Beth: I wanna be a more complete woman!");
reality[lastMrMeeseeks].makeRequest("be a more complete", "woman");
reality[lastMrMeeseeks].fulfillRequest();
reality.pop();
console.assert(reality.length == 0);

// prototype not affected by
// proto.fulfillRequest();  =>  action not defined


console.log("\n ### Jerry and Mr Meeseeks press button ### \n");

box.pressButton(reality);
console.assert(reality.length == 1);

console.log("Jerry: I would like to take two strokes off my golf game.");

reality[lastMrMeeseeks].makeRequest("take two strokes off", "my golf game");

// if we change message on create from protomeeseeks, 
// all messages from meeseeks will change
// proto.messageOnCreate = "Caaaaaan dooooooo!!";
Object.getPrototypeOf(reality[lastMrMeeseeks]).messageOnCreate = "Hi!!";

// Mr Meeseeks creating meeseeks (this happens in the episode!)

let meeseeksNum = 3;
// hoisting of functions works with its declaration
createBunchOfMeeseeks(meeseeksNum, reality, box);

console.assert(reality.length == meeseeksNum + 1);


// Array-Like Objects
var olla = {};

Object.getPrototypeOf(reality[0]).learnRequest(
        function draw(objeto) {
            function execute() {
                objeto["tomato"] = "";
                return "tomato" in objeto ? 
                    "That's a lower handycap stroke!!" : "I wanna die!!!";
            }
            // execution of function will happen when it is invoked! not before
            return execute;
        },        
        olla);

// All meeseeks disappear from reality except for one -> the first in array
// slice(start, end) => slice(0, -1) => from first to last not inclusive
let nuMmeeseeksToExplode = reality.slice(0,-1).length;

// hoisting 
explodeMrMeeseeks(nuMmeeseeksToExplode, reality);

console.assert(reality.length == 1);


console.log("\nMr Meeseeks with a knife: What about your short game?");

// Array-Like Objects
var cazo = {};

reality[0].learnRequest(function putt(objeto) {
                            function execute() {
                                    // notacion dot tambien funciona
                                    objeto.onion = "";
                                    return "onion" in objeto? 
                                                "Ohh, nice!!" :
                                                "Samantha is gona die!!!";
                            }
                            return execute;
                            },        
                        cazo);

explodeMrMeeseeks(1, reality);
console.assert(reality.length == 0);




// hoisting of functions works with its declaration
function createBunchOfMeeseeks(numMeeseeks, existence, rickBox) {
    for(let i = 1; i <= numMeeseeks; i++) {
        rickBox.pressButton(existence);
        console.log("Mr Meeseeks: Could you help me get two strokes off Jerry's golf swim?");

    }
}



function explodeMrMeeseeks(numMeeseeksToBlowOut, existence) {
    for(let i = 0; i < numMeeseeksToBlowOut; i++) {

        existence.shift().fulfillRequest();
    }    
}
