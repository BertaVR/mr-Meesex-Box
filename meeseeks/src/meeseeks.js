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

MrMeeseeks.prototype.speakOnCreate = () => {
  console.log(this.messageOnCreate);
};

MrMeeseeks.prototype.speakOnRequest = function() {
  console.log(randomMessageOnRequest())
};

function randomMessageOnRequest() { return this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)]}

exports.meeseks = factory;
