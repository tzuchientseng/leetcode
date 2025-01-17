"use strict";(self["webpackChunkleetcode"]=self["webpackChunkleetcode"]||[]).push([[91],{8091:function(n,e,c){c.r(e),c.d(e,{default:function(){return d}});var i=c(641),t=c(33),o=c(953),u=c(8848),r=c.n(u);const a={class:"problem-detail"},l={key:0},m="\n/*\n  Method 1: Functional Programming => Tail Recursion\n  Time complexity: O(n)\n  Space complexity: O(1) (需要複寫框架) 需要尾遞迴優化 (Tail Call Optimization, TCO)\n  - 在 Scala、Haskell 支援 TCO，因此空間複雜度是 O(1)。\n  - 在 JavaScript、Python、Java 中，因為不支援 TCO，實際空間複雜度是 O(n)。\n  - C/C++ 需要啟用特定的編譯器選項才支援 TCO。\n\n  -- Process --\n  getFibonacciTailRec(4, 0, 1)\n  -> getFibonacciTailRec(3, 1, 1) // 覆寫框架\n  -> getFibonacciTailRec(2, 1, 2) // 覆寫框架\n  -> getFibonacciTailRec(1, 2, 3) // 覆寫框架\n  -> getFibonacciTailRec(0, 3, 5) // return 3\n*/\n// \nconst getFibonacciTailRec = (num: number, a = 0, b = 1): number =>\n  num === 0 ? a : getFibonacciTailRec(num - 1, b, a + b);\n\n/*\n  Method 1.2: Functional Programing => Array#reduce + recursion (過程像是 Method4: memoization bottom-up)\n  Time complexity O(n) \n  Space complexity O(n)\n*/\nconst getFibonacciFP = (num: number): number =>\n  num <= 1\n    ? num\n    : Array.from({ length: num - 1 }).reduce(([prev, curr]) => [curr, prev + curr], [0, 1])[1];\n\n/*\n  Method 2: Recursive\n  Time complexity O(2^n) \n  Space complexity O(n)\n*/\nconst getFibonacciRecursive = (num: number): number => {\n    if (num === 0 || num === 1) return num; // 不要寫成 if (num === 0 || 1) return num;\n    return getFibonacciRecursive(num - 1) + getFibonacciRecursive(num - 2);\n};\n\n/*\n  Method 3: Iterative \n  Time complexity O(n) \n  Space complexity O(1)\n*/\nconst getFibonacciIterative = (num: number): number => {\n  if (num <= 1) return num;\n\n  let previous = 0, current = 1;\n  let next = 0;\n\n  for (let i = 2; i <= num; i++) {\n    next = previous + current;\n    previous = current;\n    current = next;\n  }\n\n  return current;\n\n/*\n  Method 4: Memoization (Dynamic Programming: Bottom-Up)\n  Time complexity O(n)\n  Space complexity O(n)\n*/\nconst getFibonacciBottomUp = (num: number): number => {\n  if (num <= 1) return num;\n\n  const dp: number[] = [0, 1];\n\n  for (let i = 2; i <= num; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n\n  return dp[num];\n};\n\n/*\n  Method 5: Memoization (Dynamic Programming: Top-Down)\n  Time complexity O(n)\n  Space complexity O(n)\n*/\nconst getFibonacciTopDown = (num: number): number => {\n  // const memo: number[] = Array.from({ length: num + 1 }, () => -1);\n  const memo: number[] = Array(num + 1).fill(-1);\n\n  const helper = (n: number): number => {\n    if (n <= 1) return n;\n    if (memo[n] !== -1) return memo[n];\n    memo[n] = helper(n - 1) + helper(n - 2);\n    return memo[n];\n  };\n\n  return helper(num);\n};\n",p="\nconsole.log(getFibonacciTailRec(4)); // Output: 3\nconsole.log(getFibonacciFP(4)); // Output: 3\nconsole.log(getFibonacciRecursive(4)); // Output: 3\nconsole.log(getFibonacciIterative(4)); // Output: 3\nconsole.log(getFibonacciBottomUp(4)); // Output: 3\nconsole.log(getFibonacciTopDown(4)); // Output: 3";var s=(0,i.pM)({__name:"FibonacciSequences",setup(n){(0,i.sV)((()=>{r().highlightAll()}));const e=(0,o.KR)(!1),c=()=>{e.value=!e.value};return(n,o)=>((0,i.uX)(),(0,i.CE)("div",a,[(0,i.Lk)("button",{class:"close-btn",onClick:o[0]||(o[0]=e=>n.$emit("close"))},"×"),o[6]||(o[6]=(0,i.Lk)("h2",null,"Fibonacci Sequences",-1)),o[7]||(o[7]=(0,i.Lk)("a",{href:"https://en.wikipedia.org/wiki/Fibonacci_sequence",target:"_blank"}," wiki - Fibonacci_sequence ",-1)),o[8]||(o[8]=(0,i.Lk)("p",null,[(0,i.Lk)("strong",null,"問題:"),(0,i.eW)(" 費氏數列是一個數列，其中每個數字都是前兩個數字的和。 ")],-1)),e.value?((0,i.uX)(),(0,i.CE)("div",l,o[1]||(o[1]=[(0,i.Lk)("p",null," 數列的起始值通常為 0 和 1，因此費氏數列的前幾個數字為： 0, 1, 1, 2, 3, 5, 8, 13, 21, ...。(數字之間的比例會慢慢趨近於黃金比例（約 1.618）) ",-1),(0,i.Lk)("p",null,"撰寫一個函式，接收一個整數 n，並返回費氏數列中第 n 個數字。",-1)]))):(0,i.Q3)("",!0),(0,i.Lk)("button",{id:"toggleShowMoreButton",onClick:c},(0,t.v_)(e.value?"(Hide)":"Click to Show More ↓"),1),o[9]||(o[9]=(0,i.Lk)("h3",null,"-- 我的解答 --",-1)),(0,i.Lk)("pre",{class:"code-block"},[o[2]||(o[2]=(0,i.eW)("      ")),(0,i.Lk)("code",{class:"language-javascript"},(0,t.v_)(m)),o[3]||(o[3]=(0,i.eW)("\n    "))]),o[10]||(o[10]=(0,i.Lk)("h3",null,"-- 測試用例 --",-1)),(0,i.Lk)("pre",{class:"test-block"},[o[4]||(o[4]=(0,i.eW)("      ")),(0,i.Lk)("code",{class:"language-javascript"},(0,t.v_)(p)),o[5]||(o[5]=(0,i.eW)("\n    "))])]))}}),b=c(6262);const g=(0,b.A)(s,[["__scopeId","data-v-1d381c72"]]);var d=g}}]);
//# sourceMappingURL=91.9b4a1d4c.js.map