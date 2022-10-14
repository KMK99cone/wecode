let a = [];
const even = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] / 2 === 0) {
      a.push(nums[i]);
    }
  }
  return a;
};
