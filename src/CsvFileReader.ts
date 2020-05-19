import fs from 'fs'
import path from 'path'
import { dateStringToDate } from './utils'
import { MatchResults } from './MatchResults'


const csvFile = (fileName: string) => {
    return path.resolve(__dirname, `../${fileName}`)
}

type MatchData = [Date, string, string, number, number, MatchResults, string]

export class CsvFileReader {
    data: MatchData[] = []
    constructor(public fileName: string) { }
    read(): void {
        this.data = fs.readFileSync(csvFile(this.fileName), 'utf-8')
            .split("\n")
            .map((row: string): string[] => row.split(','))
            .map((row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResults,
                    row[6]
                ]

            })
    }
}
