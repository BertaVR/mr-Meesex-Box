var singletonProtoMeeseeks = require("../../meeseeks");

function Box() {
  this.name = "Rick's box";
  this.mrMeeseeks = null;
}

var factory = (function singleBox(){
  const prototype = new Box();

  return {
    getBox: function () {
      return prototype;
    },
  };
})();

Box.prototype.createMrMeeseeks = function () {
  if (!this.mrMeeseeks) {
    this.mrMeeseeks = singletonProtoMeeseeks.singleMrMeeseeks.get(); // create an instance of the god of meeseeks module if there is not one (singleton)
  }
  return Object.create(this.mrMeeseeks); // if a proto meeseeks already exists just copy it and return the copy
};

Box.prototype.getProtoMeeseeks = function () {
  return this.mrMeeseeks;
};

Box.prototype.pressButton = function (reality) {
  let newMeeseeks = this.createMrMeeseeks();
  newMeeseeks.speakOnCreate();
  reality.push(newMeeseeks); // when the button is pressed, a meeseeks copy is pushed to reality
};

exports.singletonBox = factory;
