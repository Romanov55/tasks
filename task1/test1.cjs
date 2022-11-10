const fs = require('fs');

const array = fs.readFileSync('/home/vladislav/tasks/task1/file.txt').toString().split('\n');

const test = (array) => {
  let sum = 0;
  const result = [];
  const result2 = [];
  for (const item of array) {
    const b = item.split('');
    const [, ...rest] = b;
    const rt = Number(rest.join(''));
    if (item[0] === '+') {
      sum += rt;
    } else if (item[0] === '-') {
      sum -= rt;
    }

    if (!result.includes(sum)) {
      result.push(sum);
    } else {
      result2.push(sum);
    }
  }

  return result2[0];
}

test(array)