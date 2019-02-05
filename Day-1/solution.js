var fs = require('fs');

const data = fs
  .readFileSync('./input.txt', { encoding: 'utf8' })
  .split('\r\n')
  .map(Number);

// PART ONE
const part1 = data.reduce((a, c) => {
  return a + c;
}, 0);

console.log('Part 1: ', part1);

// PART 2
let frequency = 0;
let map = new Map();
let i = 0;

while (!map.has(frequency)) {
  map.set(frequency, map.size);
  frequency += data[i % data.length];
  i++;
}

console.log('Part 2: ', frequency);
