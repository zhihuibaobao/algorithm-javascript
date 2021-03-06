function quickSort (nums, start = 0, end = nums.length - 1) {
  // 1. TODO: 终止递归的条件，很重要
  if (start >= end) return

  // 2. 指针初始化
  let i = start
  let j = end
  // 3. 取中间值作为分界点。
  // const pivot = nums[Math.floor(i + (j - i)/2)]
  // const pivot = nums[Math.floor(start + (end - start)/2)]
  const pivot = num2[Math.floor((start + right)/2)]

  // 4. 循环条件： i、j 相等或相交，相等的时候是刚好到 pivot。相交的时候，i 以下的都是小于中间值的，j 以上都是大于中间值的。相等
  while (i <= j) {
    // 找到大于或等于 pivot 的值
    while(nums[i] > pivot) {
      i++
    }
    // 找到小于或等于 pivot 的值
    while(nums[j] < pivot) {
      j--
    }

    // 5. 交换条件：i <= j，满足则交换数据
    // TODO:走到中间 i j 相等，然后分别前后移步的，则 pivot 不会计入下一次排序
    if (i <= j) {
      // 交换位置
      i !== j && ([nums[i], nums[j]] = [nums[j], nums[i]])
      // TODO: 这个不能忘记交换以后要继续往前走
      i++
      j--
    }

    // TODO:如果交换只在 i < j 情况， i === j 时将 i++ 则会将 pivot 放入左侧进行排序
  }


  // 左边起点是 start, 终点是 j
  quickSort(nums, start, j)
  // 左边起点是 i, 终点是 j
  quickSort(nums, i, end)

  // 可返回可不返回，不返回的话只是 quickSort 得不到排序后的结果
  return nums
}

const nums = [3,2,3,1,2,4,5,5,6]
console.log('quickSort', quickSort(nums))
console.log('quickSort', quickSort([1, 2, 3, 4, 5]))
console.log('quickSort', quickSort([1, 1, 2, 2, 3, 3, 3, 4, 5, 6]))
console.log('quickSort', quickSort([2, 5, 7, 8]))

