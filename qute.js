
Qute = {
    beget: function() {
        function F() {};     
        F.prototype = this;  
        var o = new F();  // valid use of the new keyword here      
        return o;
    },
    extend: function() {  
        var o = this.beget();
        
        for (var i = arguments.length - 1; i >= 0; i--) {
            var from = arguments[i];
            for (var prop in from) { 
                o[prop] = from[prop];
            }
        }
        return o; 
    },
    rebind: function(method) {
        if (typeof method == "string") {
            if (typeof this[method] == "function") {
                method = this[method];
            } else {
                throw "Cannot rebind "+method+".  Not bound to the current object.";
            }
        }

        if (typeof method["bind"] == "function") {
            return method.bind(this);
        } else {
            var self = this;
            return function() {
                var args = Array.prototype.slice.call(arguments);
                return method.apply(self, arguments);
            }
        }
    },
    quacksLike: function(duck) {
        var quacks = true;
        for (k in duck) {
            if (typeof this[k] == "undefined") {
                quacks = false;
            }
        }
        return quacks;
    },
    quacksJustLike: function(duck) {
        var quacks = true;
        for (k in duck) {
            if ((typeof this[k] == "undefined") ||
                (typeof this[k] == duck[k])){
                quacks = false;
            }
        }
        return quacks;

    }
};
