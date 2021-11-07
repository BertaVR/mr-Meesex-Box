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

exports.singletonBox = factory;
