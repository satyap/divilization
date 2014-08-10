Game.main = function() {
    Game.update_resources();
    Game.show_buildings();
    Game.show_resources();
    Game.show_techs();
    window.setTimeout(Game.main, 100);
}

window.setTimeout(Game.main, 1000);
