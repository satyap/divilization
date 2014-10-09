describe("Game.resources", function() {
    var gr = Game.resources;
    var gb = Game.buildings;
    describe("update", function() {
        var b;
        beforeEach(function() {
           b = {
               "name": "test",
           }
           Game.data.buildings.push(b);
           spyOn(gb, "can_consume");
        });
        describe("when building is not unlocked", function() {
            it("should not check for production/consumption", function() {
                gr.update();

                expect(gb.can_consume).not.toHaveBeenCalledWith(b);
            });
        });
        describe("when building is unlocked", function() {
            it("should check for production/consumption", function() {
                Game.data.buildings_unlocked[b.name]=1;

                gr.update();

                expect(gb.can_consume).toHaveBeenCalledWith(b);
            });
        });

    });
});
