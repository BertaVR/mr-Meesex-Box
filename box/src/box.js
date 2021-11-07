var importaMeeseeks = require('../../meeseeks');


function Box (){
  this.name = "Rick's box";
  this.mrMeeseeks = null;
}

  
var factory = (() => {

  const prototype = new Box();

  return {
      getBox: function () {
          return prototype;
      }
  };
})();

Box.prototype.createMrMeeseeks = function() {
  if (! this.mrMeeseeks) {
      this.mrMeeseeks = importaMeeseeks.meeseks.get();
  }
  return Object.create(this.mrMeeseeks)
};

Box.prototype.getProtoMeeseks =  function() {return this.mrMeeseeks;}

exports.singletonBox = factory;
