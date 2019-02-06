const initialState =
  '###.#..#..##.##.###.#.....#.#.###.#.####....#.##..#.#.#..#....##..#.##...#.###.#.#..#..####.#.##.#';

const fs = require('fs');

// Create Hash Table of instructions
const hash = new Map();
fs.readFileSync('./input.txt', { encoding: 'utf8' })
  .split('\r\n')
  .forEach(item => {
    let arr = item.split(' => ');
    hash.set(arr[0], arr[1]);
  });

let currentState = initialState.split('');
let negSize = 0;

for (let j = 0; j < 20; j++) {
  while (currentState.slice(0, 3).join('') !== '...') {
    currentState.unshift('.');
    negSize++;
  }
  while (currentState.slice(currentState.length - 3).join('') !== '...') {
    currentState.push('.');
  }

  let newState = [];
  //Run instruction
  for (let i = 0; i < currentState.length; i++) {
    let potState =
      (currentState[i - 2] || '.') +
      (currentState[i - 1] || '.') +
      currentState[i] +
      (currentState[i + 1] || 0) +
      (currentState[i + 2] || 0);

    if (hash.has(potState)) {
      newState.push(hash.get(potState));
    } else {
      newState.push(currentState[i]);
    }
  }
  currentState = newState;
}

let count = 0;
for (let i = 0; i < currentState.length; i++) {
  if (currentState[i] === '#') {
    count += i - negSize;
  }
}

// 2113 was niet juist
console.log('Part 1: ', count);
