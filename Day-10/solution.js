const fs = require('fs');

const data = fs
  .readFileSync('./input.txt', { encoding: 'utf8' })
  .split('\r\n')
  .map(line => {
    let numbers = line.match(/[ -]+\d+,[ -]+\d+/g);
    let coordXY = numbers[0].trim().split(',');
    let velocityXY = numbers[1].trim().split(',');
    let obj = {
      x: parseInt(coordXY[0]),
      y: parseInt(coordXY[1]),
      vX: parseInt(velocityXY[0]),
      vY: parseInt(velocityXY[1])
    };
    return obj;
  });
