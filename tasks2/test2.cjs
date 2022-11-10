const fs = require('fs');

const array = fs.readFileSync('tasks2/file2.txt').toString().split('\n');

const vovels = (item) => {
  let sum = 0;
  for (let i = 0; i < item.length; i += 1) {
    if ('aeiou'.includes(item[i])) {
      sum += 1;
    }
  }

  if (sum > 2) {
    return true;
  }

  return false;
};

const exception = (item) => {
  if (!item.includes('ab') && !item.includes('cd') && !item.includes('pq') && !item.includes('xy')) {
    return true;
  }

  return false;
};

const aa = (item) => {
  for (let j = 0; j < item.length; j += 1) {
    if (item[j] === item[j - 1]) {
      return true;
    }
    else {
      return false;
    }
  }
};

const test = (array) => {
  let result = 0;
  for (const item of array) {
    if (vovels(item) && exception(item) && aa(item)) {
      result += 1;
    }
  }

  return result;
}

test(array)