function Meeseeks (id, messageOnRequest, messageOnDone, messageOnExplode, request, requestAsList){
    this.id = id;
    this.messageOnRequest = messageOnRequest;
    this.messageOnDone = messageOnDone;
    this.messageOnExplode = messageOnExplode;
    this.request = request;
    this.requestAsList = requestAsList;

}
  
export var factory = (() => {

    const prototype = new MrMeeseeks();

    return {
        get: function () {
            return prototype;
        }
    };
})();