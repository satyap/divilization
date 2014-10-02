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
        var length = Game.data.buildings.length;
        for(var i=0; i < length; i++) {
            var b = Game.data.buildings[i];
            if(Game.data.buildings_unlocked[b.name]) {
                if(Game.buildings.can_consume(b)) {
                    Game.buildings.consume(b);
                    Game.buildings.produce(b);
                }
            }
        }
    }
}
