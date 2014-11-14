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