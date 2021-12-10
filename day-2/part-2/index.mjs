import fs from 'fs'

const filename = process.argv[2]
const commands = fs.readFileSync(filename, {encoding: 'utf8'}).split('\n').filter(Boolean)

let depth = 0
let horizontalPosition = 0
let aim = 0

for (const command of commands) {
  const [direction, distance] = command.split(' ')
  if (direction === 'forward') {
    horizontalPosition += Number(distance)
    if (aim !== 0) {
      depth += Number(distance * aim)
    }
  } else if (direction === 'up') {
    aim -= Number(distance)
  } else if (direction === 'down') {
    aim += Number(distance)
  }
}

console.log(horizontalPosition * depth)
