const fs = require('fs');

// PART ONE
fs.readFile('./input.txt', 'utf8', (err, data) => {
  const arr = data.split('\r\n');

  // Check each entry in the array for letters that occur only 2 or 3 times
  // Count into object
  let checkedArray = arr.map(str => {
    let obj = {};
    str.split('').forEach(letter => {
      if (!obj[letter]) {
        obj[letter] = 0;
      }
      obj[letter]++;
    });
    return obj;
  });

  // Push entries with at least once exactly 2 letters into array twos
  // Entries with at least once exactly 3 letters into threes
  let two = [];
  let three = [];

  checkedArray.forEach(obj => {
    let temp = Object.values(obj);

    if (temp.includes(2)) {
      two.push(obj);
    }
    if (temp.includes(3)) {
      three.push(obj);
    }
  });

  // Multiply array lengths
  let result = two.length * three.length;

  // Log result
  console.log(result);
});

// PART TWO
fs.readFile('./input.txt', 'utf8', (err, data2) => {
  var arr2 = data2.split('\r\n');

  let i = 0;
  let found = false;

  while (found === false) {
    let countSame = 0;
    let testBase = arr2[i].split('');
    // Test Base ID to remaining IDs, letter by letter. Increasing countSame if the same letter is in the same position
    for (let j = i + 1; j < arr2.length; j++) {
      let testIterable = arr2[j].split('');
      for (let k = 0; k < testBase.length; k++) {
        if (testBase[k] === testIterable[k]) {
          countSame++;
        }
      }
      if (countSame === 1) {
        console.log('A: ', arr2[i]);
        console.log('B: ', arr2[j]);
        found = true;
      }
    }
    i++;
  }
});
