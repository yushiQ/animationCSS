// 计算两数之和
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let k = i + 1; k < nums.length; k++) {
//       if (nums[i] + nums[k] === target) {
//         return [i, k]
//       }
//     }
//   }
//   return [];
// };

// twoSum([2, 7, 11, 15], 9)

// var twoSum = function(nums, target) {
//   const hash = new Map();
//   console.log(hash);
//   const length = nums.length - 1;
//   for(let i = 0; i < length; i++) {
//     if (hash.has(target - nums[i])) {
//       return [i, hash.get(target - nums[i])]
//     }
//     hash.set(nums[i], i);
//   }

// };

// console.log(twoSum([2, 7, 11, 15], 9));

/**
 * 数据反转
 * 反转之后的结构
 * {
 *    nest: {
 *      nest: {
 *        nest: {
 *          nest: null,
 *          value: 1,
 *      },
 *         value: 2,
 *      },
 *       value: 3,
 *     },
 *    value: 4,
 *  }
 */

const obj = {
  nest: {
    nest: {
      nest: {
        nest: null,
        value: 4,
      },
      value: 3,
    },
    value: 2,
  },
  value: 1,
}
// let reversNest = [];
// 查找最里层的value值
// let getNestRevers = (obj) => {
//   if (obj && typeof obj === 'object') {
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         if (key === 'value') {
//           return obj[key];
//         } else if (typeof obj[key] === 'object') {
//           const value = getNestRevers(obj[key]);
//           if (value !== undefined) {
//             return value;
//           }
//         }
//       }
//     }
//   }
// };

// const v = getNestRevers(obj);
// console.log(v, reversNest)

// function generator (obj, ans) {
//   console.log(obj, ans)
//   if(obj['nest'] && obj.hasOwnProperty('nest')){
//     ans = {
//       nest: {
//         ...ans
//       },
//       value: obj.value
//     }
//     return generator(obj['nest'], ans);
//   }else{
//     return {
//       nest: ans ? {
//         ...ans
//       } : null,
//       value: obj.value
//     }
//   }
// }
// console.log(generator(obj, {}));

// function generator(obj, ans) {
//   if (!obj['nest']) {
//     return {
//       nest: ans ? {
//         ...ans
//       } : null,
//       value: obj.value
//     }
//   }
//   ans = {
//     nest: ans ? {
//       ...ans
//     } : null,
//     value: obj.value
//   }
//   return generator(obj['nest'], ans)
// }
// console.log(generator(obj, null));

var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
     map.set(nums[i], map.get(nums[i] - 1) + 1 || 1)
  }
  // for (const num of nums) {
  //   console.log(num,'====')
  //   map.set(num, map.get(num - 1) + 1 || 1);
  // }
  const ans = Array.from(map.values());
  const maxL = Math.max(...ans);
  console.log(ans, maxL)
  return maxL
};

console.log(longestConsecutive([1, 2, 3, 4, 100, 200]))