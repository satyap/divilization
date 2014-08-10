Game.show_resources = function() {
    var list = document.getElementById('resource_list');
    var html = '';

    for(r in Game.resources) {
        html += r + ': ' + Game.resources[r] + '<br/>';
    }

    list.innerHTML = html;
}

Game.update_resources = function() {
}
