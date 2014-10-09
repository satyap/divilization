Game.resources = {
    show: function() {
        var list = document.getElementById('resource_list');
        var html = '';

        for(r in Game.data.resources) {
            html += r + ': ' + Game.data.resources[r] + '<br/>';
        }

        list.innerHTML = html;
    },

    update: function() {
        var gd = Game.data;
        var length = gd.buildings.length;
        for(var i=0; i < length; i++) {
            var b = gd.buildings[i];
            if(gd.buildings_unlocked[b.name]) {
                for(var j = 0; j < gd.buildings_unlocked[b.name]; j++) {
                    if(Game.buildings.can_consume(b)) {
                        Game.buildings.consume(b);
                        Game.buildings.produce(b);
                    }
                }
            }
        }
    }
}
