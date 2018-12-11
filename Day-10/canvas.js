let data = fetch('./input.txt')
  .then(response => response.text())
  .then(data => {
    let tmp = data.split('\r\n').map(line => {
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
    return tmp;
  })
  .then(data => console.log(data));

// Canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.fillRect(1, 1, 10, 10);
ctx.fillRect(40, 40, 10, 10);
