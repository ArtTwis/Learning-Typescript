"use strict";
exports.__esModule = true;
var score = 33;
score = '44';
var twinkle = {
    username: 'Twinkle',
    id: 33445
};
twinkle = {
    adminname: 'Twinkle',
    id: 33445
};
// ===================================================================================
function getDbId(id) {
    if (typeof id === 'string') {
        id = id.toLowerCase();
    }
    console.log("Db id id : ".concat(id));
}
getDbId(3);
getDbId('3');
// ===================================================================================
var data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var data2 = ['1', '2', '3', '4', '5', '6', '7'];
var data3 = ['1', '2', '3', '4', '5', 7, 8, 9];
// ===================================================================================
var seatAllotment;
