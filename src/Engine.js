'use strict';

var paletto = function () {

    var board;
    var init = function () {

        board = new Array(6);
        for (var i = 0; i < 6; i++) {
            board[i] = new Array(6);
        }
        board[5][0]= "jaune";
        board[5][1]= "bleu";
        board[5][2]= "noir";
        board[5][3]= "rouge";
        board[5][4]= "vert";
        board[5][5]= "noir";


        board[4][0]= "blanc";
        board[4][1]= "vert";
        board[4][2]= "jaune";
        board[4][3]= "noir";
        board[4][4]= "jaune";
        board[4][5]= "vert";

        board[3][0]= "rouge";
        board[3][1]= "noir";
        board[3][2]= "rouge";
        board[3][3]= "vert";
        board[3][4]= "bleu";
        board[3][5]= "blanc";


        board[2][0]= "bleu";
        board[2][1]= "jaune";
        board[2][2]= "bleu";
        board[2][3]= "blanc";
        board[2][4]= "noir";
        board[2][5]= "rouge";

        board[1][0]= "Jaune";
        board[1][1]= "blanc";
        board[1][2]= "vert";
        board[1][3]= "rouge";
        board[1][4]= "jaune";
        board[1][5]= "bleu";


        board[0][0]= "noir";
        board[0][1]= "vert";
        board[0][2]= "blanc";
        board[0][3]= "bleu";
        board[0][4]= "rouge";
        board[0][5]= "blanc";


    };

    this.GetMarblescolor = function () {
        var test;
        for (var i = 0; i < [board].length; i+1) {
            for (var j = 0; j < 6; j++) {
                if (board[i][j] == board [i][j + 1] ||
                    board [i][j] == board[i][j - 1] ||
                    board[i][j] == board [i + 1][j] )
                {
                    test = 0;
                }
                else test = 1;

            }

            return test;
        }
    };
    this.isjaune= function(){
    return board[5][0];
    };

    init();
// private attributes and methods

// public methods
};
