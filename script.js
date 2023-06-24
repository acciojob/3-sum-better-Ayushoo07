function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  const n = arr.length;
  let closestSum = Infinity;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      // Check if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum === target) {
        // Found the exact sum, no need to continue searching
        return closestSum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
