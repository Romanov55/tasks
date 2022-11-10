var fs = require('fs');
var array = fs.readFileSync('task1/file.txt').toString().split("\n");
let sum = 0;
let result = [];
let result2 = [];
for (let item of array) {
    let b = item.split('')
    const [first, ...rest] = b;
    const rt = Number(rest.join(''))
    if (item[0] === '+') {
        sum += rt
    }
    else if (item[0] === '-') {
        sum -= rt
    };

    if (!result.includes(sum)){
        result.push(sum)
    }
    else {
        result2.push(sum)
    };
};

console.log(result2[0])