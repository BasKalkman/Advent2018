const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').split('');

const checkLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const checkUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function runCheck() {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < checkLowerCase.length; j++) {
      if (input[i] === checkLowerCase[j] && input[i + 1] === checkUpperCase[j]) {
        input.splice(i, 2);
        removalsThisRound++;
      }
      if (input[i] === checkUpperCase[j] && input[i + 1] === checkLowerCase[j]) {
        input.splice(i, 2);
        removalsThisRound++;
      }
    }
  }
}

let noMoreOptions = false;
let removalsThisRound = 0;

while (noMoreOptions === false) {
  removalsThisRound = 0;

  runCheck();

  if (removalsThisRound === 0) {
    noMoreOptions = true;
    console.log(input.length);
  }
}

// PART 2
