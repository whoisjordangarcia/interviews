const nums = [];
for (var i = 0; i < nums.length; i++) {
  nums[i];
}

let left = 0;
let right = nums.length;
while (left < right) {
  if (nums[left] > nums[right]) {
    right--;
  } else if (nums[left] < nums[right]) {
    left++;
  } else {
    // return
  }
}

for (const num of nums) {
  console.log(num);
}

const map = {};

map["aa"] = 1;
map["bb"] = 2;

const newMap = new Map();
newMap.has(1);
newMap.set(1, "value");
newMap.get(1);

let testTwo = new Set();
testTwo.add("a");
testTwo.has("b");
testTwo.delete();
testTwo.clear()("letter".charCodeAt(0) - 97 - ("a".charCodeAt(0) - 97));

Array.from({ length: 20 }, () => 0);
Array.from([1, 2, 3]);
new Array(4).fill(0);

Math.floor(-1, 2);
Math.max(0, 12);

const stack = [];
stack.pop();
stack.push(1);

stack.reduce((accum, curr) => accum + curr, 0);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const ROWS = matrix.length;
const COLUMNS = matrix[0].length;
for (var i = 0; i < ROWS; i++) {
  for (var j = 0; j < COLUMNS; j++) {
    console.log(matrix[ROWS[j]][COLUMNS[j]]);
  }
}

let test = ["test", "test2"];
test.splice(0, 1);
test.slice(0, 1);

"test".substring(0, 2);

const objectTest = {
  one: 1,
  two: 2,
  three: 3,
};

for (let key in objectTest) {
    let value = obj[key]
}

for (const key of Object.keys(objectTest)) {
    console.log(key, objectTest[key])
}

for (const [key, value] of Object.entries(objectTest)) {
    console.log(key, value)
}

'test'.indexOf('e') == 1