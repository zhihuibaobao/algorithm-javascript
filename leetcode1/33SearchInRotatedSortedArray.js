/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  let mid

  // 至少 2 个数才会进入这个循环
  while (start + 1 < end) {
    mid = start + Math.floor((end - start)/2)

    if (nums[mid] === target) {
      return mid
    }
    
    if (nums[mid] > nums[start]) {
      // nums[mid] > nums[start] && nums[mid] < nums[end]
      if (nums[mid] < nums[end]) {
        return binarySearch(nums, target, start, end)
        // nums[mid] > nums[start] && nums[mid] > nums[end]
      } else {
        if (nums[mid] > target && nums[start] <= target) {
          end = mid
        } else {
          start = mid
        }
      }
    } else {
       // nums[mid] < nums[start] && nums[mid] < num[mid - 1]
      if (nums[mid] < nums[mid - 1]) {
        // 去左边
        if (nums[end] < target) {
          end = mid
        } else {
          start = mid
        }
      // nums[mid] < nums[start] && nums[mid] > num[mid - 1]
      } else {
        if (nums[mid] < target && nums[end] >= target) {
          start = mid
        } else {
          end = mid
        }
      }
    }
  }

  if (nums[start] === target) {
    return start
  }

  if (nums[end] === target) {
    return end
  }

  return -1
};

function binarySearch (nums, target, start, end) {
  let mid
  while (start + 1 < end) {
    mid = start + Math.floor((end - start)/2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid
    } else {
      end = mid
    }
  }

  if (nums[start] === target) {
    return start
  }

  if (nums[end] === target) {
    return end
  }

  return -1
}

console.log(search([0, 1, 2, 3, 4], 2))
console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([5,1,3], 5))
console.log(search([6,7,1,2,3,4,5], 6))
console.log(search([5,1,2,3,4], 1))
console.log(search([5,1,2,3,4], 4))