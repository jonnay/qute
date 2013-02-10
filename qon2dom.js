
Qon2Dom = Qute.extend({
    children: [],
    domReady:  function() {
        for(i=0; i< this.children.length; i++) {
            if (typeof this.children[i]["init"] == "function") {
                this.children[i].init();
            } else {
                throw "Cannot call init";
            }
        }
    },
    beget: function() {
        var o = Qute.beget(this);
        Qon2Dom.children.push(o);
        return o;
    },
    init: function() {}
});
