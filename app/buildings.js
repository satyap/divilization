Game.buildings = {
    show: function() {
        var list = document.getElementById('building_list');
        var html = '';

        for(r in Game.data.buildings_unlocked) {
           html += Game.data.buildings_by_name[r].name + ': ' + Game.data.buildings_unlocked[r];
           html += '<a href="#" onclick="Game.buildings.buy(\'' + r + '\')">build</a>'
        }

        list.innerHTML = html;
    },

    can_consume: function(building) {
        return Game.buildings.resources_exist(building, 'consumes');
    },

    resources_exist: function(building, attribute) {
        var exist = 1;
        for(var c in building[attribute]) {
            if(building[attribute][c] > Game.data.resources[c] ) { exist = 0; }
        }
        return exist;
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

    buy: function(name) {
        // only if the resources are met
        var building = Game.data.buildings_by_name[name];
        if(Game.buildings.resources_exist(building, "resources")) {
            if(Game.data.buildings_unlocked[name]!=undefined) {
                Game.data.buildings_unlocked[name] ++;
            }
        }
    }
}
