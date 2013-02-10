
Qute = {
    beget: function() {
        function F() {};     
        F.prototype = this;  
        var o = new F();  // valid use of the new keyword here      
        return o;
    },
    extend: function(from) {  
        var o = this.beget();
        
        for (var prop in from) { 
            o[prop] = from[prop];
        }
        return o; 
    },
    bindThis: function(method) {
        // degenerate definition for now
        // should probably use a single-eval bound in an anon function

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
