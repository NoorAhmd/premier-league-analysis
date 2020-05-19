"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResults_1 = require("./MatchResults");
var reader = new CsvFileReader_1.CsvFileReader('original.csv');
reader.read();
console.log(reader.data[0][0]);
var chosenTeam = "Man United";
var chosenTeamHomeWins = 0;
var chosenTeamAwayWins = 0;
var chosenTeamWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === chosenTeam && match[5] === MatchResults_1.MatchResults.HomeWin) {
        chosenTeamHomeWins++;
        chosenTeamWins++;
    }
    else if (match[2] === chosenTeam && match[5] === MatchResults_1.MatchResults.AwayWin) {
        chosenTeamAwayWins++;
        chosenTeamWins++;
    }
}
console.log("Home wins: ", chosenTeamHomeWins);
console.log("Away wins: ", chosenTeamAwayWins);
console.log("All wins: ", chosenTeamWins);
