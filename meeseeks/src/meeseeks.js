

function MrMeeseeks (id, messageOnRequest, messageOnDone, messageOnExplode, request, requestAsList){
    this.id = Date.now();
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = messageOnRequest;
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
        }
    };
})();

MrMeeseeks.prototype.messageOnCreate= (()=>{
    return MrMeeseeks.messageOnCreate;
});

exports.meeseks = factory;
