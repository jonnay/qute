
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
