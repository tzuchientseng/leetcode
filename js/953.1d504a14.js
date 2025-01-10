"use strict";(self["webpackChunkleetcode"]=self["webpackChunkleetcode"]||[]).push([[953],{3953:function(n,e,u){u.r(e),u.d(e,{default:function(){return p}});var t=u(641),c=u(33),o=u(953);const r={class:"problem-detail"},m={class:"code-block"},a={class:"code-block"};var l=(0,t.pM)({__name:"TwoSum",setup(n){const e=(0,o.KR)("\n/*\n  Method 1: Brute Force\n  Time complexity o(n(n-1)/2) == o(n^2)\n  Space complexity o(1)\n*/\nconst twoSumBruteForce = (nums: number[], target: number): number[] => {\n for (let i = 0; i < nums.length; i++) {\n   for (let j = i + 1; j < nums.length; j++) {\n    let sum = nums[i] + nums[j];\n    if (target === sum) return [i, j];\n   }\n }\n};\n/*\n  Method 2: HashMap\n  Time complexity o(n)\n  Space complexity o(n)\n*/\nconst twoSumHashMap = (nums: number[], target: number): number[] => {\n  const recordMap = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const complement: number = target - nums[i];\n    if (recordMap.has(complement)) {\n      return [recordMap.get(complement), i];\n    }\n    recordMap.set(nums[i], i);\n    // console.log({recordMap})\n  }\n}\n\n/*\n  Method 3: Functional Programming (Reduce)\n  Time complexity o(n)\n  Space complexity o(n)\n*\nconst twoSumReduce = (nums: number[], target: number): number[] => {\n  // array.reduce((accumulator, currentValue(key), currentIndex?(value), array?) => { ... }, initialValue);\n  const result = nums.reduce(\n    (acc: { map: Map<number, number>, found: boolean, indices: number[] }, num: number, index: number) => {\n      if (acc.found) return acc; // 若找到則停止\n      const complement: number = target - num;\n\n      if (acc.map.has(complement)) {\n        return {\n          ...acc,\n          found: true,\n          indices: [acc.map.get(complement)!, index], // 使用 ! 表示非空斷言 一定不是 null 或 undefined\n        };\n      }\n      return {\n        ...acc,\n        map: acc.map.set(num, index),\n      };\n    },\n    { map: new Map<number, number>(), found: false, indices: [] }\n  );\n  return result.indices;\n};\n"),u=(0,o.KR)("console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]\nconsole.log(twoSum([3, 2, 4], 6)); // [1, 2]\nconsole.log(twoSum([3, 3], 6)); // [0, 1]");return(n,o)=>((0,t.uX)(),(0,t.CE)("div",r,[(0,t.Lk)("button",{class:"close-btn",onClick:o[0]||(o[0]=e=>n.$emit("close"))},"×"),o[1]||(o[1]=(0,t.Lk)("h2",null,"Two Sum",-1)),o[2]||(o[2]=(0,t.Lk)("p",null,[(0,t.Lk)("strong",null,"問題:"),(0,t.eW)(" 給定一個整數陣列 nums 和一個目標值 target， 請找出並返回兩個數字，使它們的和等於目標值。 ")],-1)),o[3]||(o[3]=(0,t.Lk)("h3",null,"我的解答",-1)),(0,t.Lk)("pre",m,(0,c.v_)(e.value),1),o[4]||(o[4]=(0,t.Lk)("h3",null,"測試用例",-1)),(0,t.Lk)("pre",a,(0,c.v_)(u.value),1)]))}}),s=u(6262);const i=(0,s.A)(l,[["__scopeId","data-v-1830c4dc"]]);var p=i}}]);
//# sourceMappingURL=953.1d504a14.js.map