import fs from 'fs'

const filename = process.argv[2]
const numbers = fs.readFileSync(filename, {encoding: 'utf8'}).split('\n').map(Number)

const count = numbers.reduce((sum, number, index) => {
    const previousNumber = numbers[index - 1]
    if (previousNumber && number > previousNumber) {
        sum += 1
    }
    return sum
}, 0)

console.log(count)