Game.main = function() {
    Game.resources.update();
    Game.buildings.show();
    Game.resources.show();
    Game.techs.show();
    window.setTimeout(Game.main, 300);
}

window.setTimeout(Game.main, 1000);
