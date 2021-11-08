function MrMeeseeks() {
  this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
  this.messageOnRequest = [
    "Oooh yeah! Can do!",
    "Yes sireee!",
    "Oh, yeah!, Yes, ma'am!",
  ];
}

var factory = (() => {
  const prototype = new MrMeeseeks();

  return {
    get: function () {
      return prototype;
    },
  };
})();

MrMeeseeks.prototype.speakOnCreate = function() {
  console.log(this.messageOnCreate);
};

MrMeeseeks.prototype.speakOnRequest = function() {
  let message = this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)]
  console.log(message);}

// Closure to make request but it will not be brought to action (executed) 
//  until it's fulfilled (method fulfillRequest)
MrMeeseeks.prototype.makeRequest = function(desire, object) { 
  let closure = function(thing) {
      function execute() {
          return desire + " " + thing;
      }
      return execute;
  };
// property attached mr meeseeks ( current object) 
// here we define what the action will be!
  this.action = closure(object); 
  this.speakOnRequest();
};

MrMeeseeks.prototype.fulfillRequest = function() {
  console.log(this.action() + " All done!!");
}

MrMeeseeks.prototype.learnRequest = function(desire, object) {
  this.action = desire(object);
};

exports.singleMrMeeseeks = factory;
