/*
945. 使数组唯一的最小增量

给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

返回使 A 中的每个值都是唯一的最少操作次数。

示例 1:
输入：[1,2,2]
输出：1
解释：经过一次 move 操作，数组将变为 [1, 2, 3]。

示例 2:
输入：[3,2,1,2,1,7]
输出：6
解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。

提示：
0 <= A.length <= 40000
0 <= A[i] < 40000
*/

/*
### 解题思路

因为 move 只能将元素递增，而不能递减。假设数组是从小到大排序的，那么保证元素不重复的最低要求就是 A[n] > A[n-1]。

要实现 A[n] > A[n-1]，我们只需要遍历排序好的 A，对每个元素计算 (A[n-1] + 1) - A[n] 的差即可。

举个例子：
如果有这样一个排序好的数组 [1, 2, 2, 2]，那么每个元素的 move 次数如下：
  1. A[0], 0次
  2. A[1], 0次
  3. A[2], (A[1]+1) - A[2] = 2 + 1 - 2 = 1次
  4. A[3], (A[2]+1) - A[3] = 3 + 1 - 2 = 2次（经过步骤 3 之后，A[2] 的值为 3）
因此，总的 move 次数为 3 次。

### 复杂度分析
时间复杂度：O(nlogn+n)，nlogn 为排序的时间复杂度，n 为遍历统计 move 次数的时间复杂度。
空间复杂度：O(logn)，排序需要额外的 O(logn) 栈空间。

### 代码

为了优化算法，代码中没有直接修改 A[n]，而是通过 tmp 储存 move 后的 A[n]。

此解法会修改原始数组。
*/

/**
 * @param {number[]} A
 * @return {number}
 */
const minIncrementForUnique = function(A: number[]) {
  if (A.length === 0) {
    return 0;
  }

  A.sort((a, b) => a - b);

  // 使用 tmp 记录上一个元素 move 后的值
  let tmp = A[0];
  let cnt = 0;

  for (let i = 1; i < A.length; i++) {
    if (A[i] <= tmp) {
      // 如果 A[i] 比 A[i-1] 小（或相等），则需要 move A[i-1]+1 - A[i] 次，tmp +1
      tmp++;
      cnt += tmp - A[i];
    } else {
      // 如果 A[i] 比 A[i-1] 大，则不需要 move，但需要将 tmp 更新为 A[i]
      tmp = A[i];
    }
  }

  return cnt;
};

console.log(minIncrementForUnique([1, 2, 2]), 1);
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]), 6);
console.log(minIncrementForUnique([3, 1]), 0);
console.log(minIncrementForUnique([1, 1]), 1);
console.log(minIncrementForUnique([1]), 0);
console.log(minIncrementForUnique([1, 2, 2, 2]), 3);

export { minIncrementForUnique };
