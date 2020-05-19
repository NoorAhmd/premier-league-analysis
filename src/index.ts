import { CsvFileReader } from './CsvFileReader'
import { dateStringToDate } from './utils'
import { MatchResults } from './MatchResults';






const reader = new CsvFileReader('original.csv')
reader.read()
console.log(reader.data[0][0]);


let chosenTeam: string = "Man United"
let chosenTeamHomeWins: number = 0
let chosenTeamAwayWins: number = 0
let chosenTeamWins: number = 0


for (const match of reader.data) {
    if (match[1] === chosenTeam && match[5] === MatchResults.HomeWin) {
        chosenTeamHomeWins++
        chosenTeamWins++
    }
    else if (match[2] === chosenTeam && match[5] === MatchResults.AwayWin) {
        chosenTeamAwayWins++
        chosenTeamWins++
    }
}

console.log("Home wins: ", chosenTeamHomeWins);
console.log("Away wins: ", chosenTeamAwayWins);
console.log("All wins: ", chosenTeamWins);


















