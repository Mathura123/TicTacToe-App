let { userInput } = require('../routes/gameRoutes');
let computerOutput= 3; 
let userArray = [];
let computerArray = [];
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var pos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

// export function response() {
//     var p;
//     function claim(position) {
//         board[position] = 2;
//         let n = 'block_' + (position);
//         turn = "User";
//         computerArray.push(position + 1);
//         return;
//     }
//     for (var w = 0; w < pos.length; w++) {
//         p = pos[w];
//         var countX = 0;
//         var countO = 0;
//         var blankO = -1;
//         for (var c = 0; c < 3; c++) {
//             if (board[p[c]] == 1) countX++;
//             if (board[p[c]] == 2) countO++;
//             if (board[p[c]] == 0) blankO = c;
//         }

//         //1 ensure win when pc has 2 in a row and blank
//         if (countO == 2 && blankO > -1) {
//             claim(p[blankO]);
//             return;
//         }

//     }

//     for (var w = 0; w < pos.length; w++) {
//         p = pos[w];
//         var countX = 0;
//         var countO = 0;
//         var blankO = -1;
//         for (var c = 0; c < 3; c++) {
//             if (board[p[c]] == 1) countX++;
//             if (board[p[c]] == 2) countO++;
//             if (board[p[c]] == 0) blankO = c;
//         }

//         //2 avert sure loss when user has 2 in a row and blank
//         if (countX == 2 && blankO > -1) {
//             claim(p[blankO]);
//             return;
//         }

//     }

//     //3 claim optimal middle if open
//     if (board[4] == 0) {
//         claim(4);
//         return;
//     }

//     //avert diagonal xox => claim edge, not corner
//     if (board.toString() == [0, 0, 1, 0, 2, 0, 1, 0, 0].toString()) {
//         claim(7);
//         return;
//     }
//     if (board.toString() == [1, 0, 0, 0, 2, 0, 0, 0, 1].toString()) {
//         claim(5);
//         return;
//     }
//     //avoid corner trap
//     if (board.toString() == [1, 0, 0, 0, 2, 0, 0, 1, 0].toString()) {
//         claim(6);
//         return;
//     }


//     for (var w = 0; w < pos.length; w++) {
//         p = pos[w];
//         var countX = 0;
//         var countO = 0;
//         var blankO = -1;
//         for (var c = 0; c < 3; c++) {
//             if (board[p[c]] == 1) countX++;
//             if (board[p[c]] == 2) countO++;
//             if (board[p[c]] == 0) blankO = c;
//         }

//         //4 avert user 2 in row when 1 in row and 2 blank by placing O in a corner
//         if (countX == 1 && countO == 0 && blankO > -1) {


//             if (p[blankO] == 0 && board[0] == 0) {
//                 claim(0);
//                 return;
//             }
//             if (p[blankO] == 2 && board[2] == 0) {
//                 claim(2);
//                 return;
//             }
//             if (p[blankO] == 6 && board[6] == 0) {
//                 claim(6);
//                 return;
//             }
//             if (p[blankO] == 8 && board[8] == 0) {
//                 claim(8);
//                 return;
//             }

//         }
//     }
//     for (var w = 0; w < pos.length; w++) {
//         p = pos[w];
//         var countX = 0;
//         var countO = 0;
//         var blankO = -1;
//         for (var c = 0; c < 3; c++) {
//             if (board[p[c]] == 1) countX++;
//             if (board[p[c]] == 2) countO++;
//             if (board[p[c]] == 0) blankO = c;
//         }

//         //5 support yourself to 2 in a row when 1 in row and 2 blank
//         if (countO == 1 && countX == 0 && blankO > -1) {

//             claim(p[blankO]);
//             return;
//         }

//     }
//     for (var w = 0; w < pos.length; w++) {
//         p = pos[w];
//         var countX = 0;
//         var countO = 0;
//         var blankO = -1;
//         for (var c = 0; c < 3; c++) {
//             if (board[p[c]] == 1) countX++;
//             if (board[p[c]] == 2) countO++;
//             if (board[p[c]] == 0) blankO = c;
//         }

//         //6 avert user 2 in row when 1 in row and blank
//         if (countX == 1 && blankO > -1) {
//             claim(p[blankO]);
//             return;
//         }
//     }
// }

module.exports.computerOutput = computerOutput;