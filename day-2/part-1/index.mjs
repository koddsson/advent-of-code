import fs from 'fs'

const filename = process.argv[2]
const commands = fs.readFileSync(filename, {encoding: 'utf8'}).split('\n').filter(Boolean)

let depth = 0
let horizontalPosition = 0

for (const command of commands) {
  const [direction, distance] = command.split(' ')
  if (direction === 'forward') {
    horizontalPosition += Number(distance)
  } else if (direction === 'up') {
    depth -= Number(distance)
  } else if (direction === 'down') {
    depth += Number(distance)
  }
}

console.log(depth * horizontalPosition)
