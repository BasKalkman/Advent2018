const fs = require('fs');

// 2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2

// if first > 0 - has children
// second number is # metadata

const data = fs
  .readFileSync('./input.txt', { encoding: 'utf8' })
  .split(' ')
  .map(item => parseInt(item));

let metadata = [];

function parseTree() {
  let obj = {};
  obj.header = data.splice(0, 2);
  obj.child = [];
  for (let i = 0; i < obj.header[0]; i++) {
    obj.child.push(parseTree());
  }
  obj.metadata = data.splice(0, obj.header[1]);

  obj.metadata.forEach(item => metadata.push(item));

  return obj;
}

const tree = parseTree();

let result = metadata.reduce((acc, current) => {
  return acc + current;
});

console.log(result);
