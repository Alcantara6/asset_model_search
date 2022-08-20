var eventUtil = {
    addHandler: function(element, type, handler) {
        if(element.addEventListener){
            element.addEventListener(type, handler, false);        
        } else if(element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) {
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);        
        } else if(element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function(e) {
        return e?e:window.e;       
    },
    getType: function(e) {
        return e.type;
    },
    getElement: function(e) {
        return e.target || e.srcElement;
    },
    stopPropagation: function(e) {
        if(e.stopPropagation){
            e.stopPropagation();    
        } else {
            e.cacelBubble = true;
        }
    },
    preventDefault: function(e) {
        if(e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
}

var delegateEvent = 