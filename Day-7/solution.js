const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\r\n');

let steps = [];

// Populate steps in instructions and their requirements
data.forEach(line => {
  let step = line.match(/[A-Z] can/g)[0].replace(' can', '');
  let requires = line.match(/[A-Z] must/g)[0].replace(' must', '');

  if (findStep(step) === -1) {
    let obj = {
      step: step,
      requires: [],
      completed: false
    };
    obj.requires.push(requires);
    steps.push(obj);
  } else {
    let index = findStep(step);
    steps[index].requires.push(requires);
  }
  if (findStep(requires) === -1) {
    let obj = {
      step: requires,
      requires: [],
      completed: false
    };
    steps.push(obj);
  }
});

// Sort Steps Alphabetically
steps.sort((a, b) => {
  if (a.step > b.step) {
    return 1;
  } else {
    return -1;
  }
});

// Return index of a step in steps
function findStep(search) {
  let index = steps.findIndex(step => step.step === search);
  return index;
}

// Write completed steps
let completedSteps = [];

// While there are still steps to take
while (completedSteps.length !== steps.length) {
  // Check each step
  for (let i = 0; i < steps.length; i++) {
    console.log(i);
    // Is it completed?
    if (steps[i].completed === false) {
      // Can it be completed?
      let requirementsUnfulfilled = 0;
      for (let j = 0; j < steps[i].requires.length; j++) {
        let index = findStep(steps[i].requires[j]);
        if (steps[index].completed === false) {
          requirementsUnfulfilled++;
        }
      }
      // If it can be completed
      if (requirementsUnfulfilled === 0) {
        steps[i].completed = true;
        completedSteps.push(steps[i].step);
        i = -1; // Next step is to increment i, so we start from beginning of array again
      }
    }
  }
}

console.log(steps.length);
console.log(completedSteps.length);
console.log(completedSteps.join(''));
