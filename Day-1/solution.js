var fs = require('fs');

// PART ONE
fs.readFile('./input.txt', 'utf8', (err, contents) => {
  const frequencyChanges = contents.split('\r\n');

  let result = frequencyChanges
    .map(item => parseInt(item))
    .reduce((acc, change) => {
      return acc + change;
    }, 0);

  console.log(result);
});

// PART 2
fs.readFile('./input.txt', 'utf8', (err, data) => {
  let arr = data.split('\r\n').map(item => parseInt(item));

  let i = 0;
  let frequency = 0;
  let repeat = false;
  let freqArr = [0];

  while (repeat === false) {
    if (!arr[i]) {
      i = 0;
    }
    frequency += arr[i];

    if (freqArr.indexOf(frequency) === -1) {
      freqArr.push(frequency);
      i++;
    } else {
      repeat = true;
    }
  }
  console.log(frequency);
});
