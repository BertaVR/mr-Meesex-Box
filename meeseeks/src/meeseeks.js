function MrMeeseeks(messageOnDone, messageOnExplode, request, requestAsList) {
  this.id = Date.now();
  this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
  this.messageOnRequest = [
    "Oooh yeah! Can do!",
    "Yes sireee!",
    "Oh, yeah!, Yes, ma'am!",
  ];
  this.messageOnDone = messageOnDone;
  this.messageOnExplode = messageOnExplode;
  this.request = request;
  this.requestAsList = requestAsList;
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
  return MrMeeseeks.messageOnCreate;
};

MrMeeseeks.prototype.speakOnRequest = function() {
  return this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)]
};



exports.meeseks = factory;
