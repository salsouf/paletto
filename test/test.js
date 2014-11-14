'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var game = new paletto();

    assertTrue (game.GetMarblescolor()==1);
};
PalettoTestCase.prototype.testStory2 = function () {
    var game = new paletto();

    assertTrue (game.isjaune()=="jaune");
};
PalettoTestCase.prototype.testStory3= function () {
    var game = new paletto();

    game.getMarble(0, "A6");
    assertFalse (game.jauneplayer("A6")==1)
};


