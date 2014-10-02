Game.buildings = {
    show: function() {
    },

    can_consume: function(building) {
        consumes = 1;
        for(var c in building.consumes) {
            if(building.consumes[c] > Game.data.resources[c] ) { consumes = 0; }
        }
        return consumes;
    },

    consume: function(building) {
        for(var c in building.consumes) {
            Game.data.resources[c] -= building.consumes[c];
        }
    },

    produce: function(building) {
        for(var c in building.produces) {
            Game.data.resources[c] += building.produces[c];
        }
    },
}
