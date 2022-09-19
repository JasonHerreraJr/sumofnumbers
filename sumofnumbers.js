const testData = [1,3,5,7,9];

function sumFor(nums){
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testData));

const sumWhile = (nums) => {
  let total = 0;
  let i = 0;
  while(i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
};

console.log(sumWhile(testData));


function sumRecursion(nums){
  if (nums.length === 0){
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));

}

console.log(sumRecursion(testData))

const sumTheSimpleWay = (nums) => {
  return _.reduce(nums, function(memo, num) { return memo + num; }, 0);
};

console.log(sumTheSimpleWay(testData));

