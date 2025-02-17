"use strict";(self["webpackChunkleetcode"]=self["webpackChunkleetcode"]||[]).push([[447],{8447:function(n,e,i){i.r(e),i.d(e,{default:function(){return v}});var o=i(641),t=i(33),c=i(953),l=i(8848),u=i.n(l);const r={class:"problem-detail"},d={key:0},a={class:"code-block"},m="\n/* ------------------------------------------ GCD (Greatest Common Divisor) ------------------------------------------ */\n/*\n  Method 1\n  Time complexity: O(log(min(a, b))) // 歐幾里得算法的*最差情況*出現在兩個數是連續的斐波那契數每次迭代的問題規模縮小到原來的 黃金比例約 1.618 倍 e.g: GCD(21, 13)\n  Space complexity: O(1)\n  (ａ< b): (GCD(18, 48))\n      n = 1; 18 = 48 * 0 + 18 及 18 mod 48\n      n = 2; 48 = 18 * 2 + 12 及 48 mod (18 mod 48) = 12\n      n = 3; 18 = 12 * 1 + 6  及 18 mod 12 = 6\n      n = 4; 12 = 6 * 2 + 0   及 12 mod 6 = 0\n      n = 5;  6 = 0 * 0 + 0   及 GCD(18, 48) = 6\n*/\nconst GCD = (dividend: number, divisor: number): number => {\n    dividend = Math.abs(dividend);\n    divisor = Math.abs(divisor);\n\n    while (divisor !== 0) {\n        const remainder = dividend % divisor;\n        dividend = divisor;\n        divisor = remainder;\n    }\n\n    return dividend;\n}\n\n/*\n  Method 2: Functional Programming => Recursion\n  Time complexity: O(log(min(a, b))) \n  Space complexity: O(log(min(a, b))) \n*/\n const gcdRecursive = (dividend: number, divisor: number): number => divisor === 0 ? dividend : gcdRecursive(divisor, dividend % divisor);\n\n/*\n  Mutiple GCD: Functional Programming => Recursion + reduce()\n  Time complexity: O(n*log(m)) \n  Space complexity: O(log(m)) \n\n*/\nconst gcdRecursive = (dividend: number, divisor: number): number => divisor === 0 ? dividend : gcdRecursive(divisor, dividend % divisor);\nconst gcdReduce  = (numbers: number[]): number => numbers.reduce((acc, cur) => gcdRecursive(acc, cur), numbers[0]);\n\n/* ------------------------------------------ LCM (Least Common Multiple) ------------------------------------------ */\n/*\n  Type 1: Computes the Least Common Multiple (LCM) of two numbers\n  Time complexity: O(log(min(a, b)))\n  Space complexity: O(1)\n*/\nconst GCD = (dividend: number, divisor: number): number => {\n    while (divisor !==0 ) {\n        [dividend, divisor] = [divisor, dividend % divisor];\n    }\n    return dividend;\n};\nconst LCM = (num1: number, num2: number): number => Math.abs(num1 * num2) / GCD(num1, num2);\n\n/*\n  Type 2: Computes the Least Common Multiple (LCM) of multiple numbers\n  Time complexity: O(n*log(M)) // where M is the maximum\n  Space complexity: O(1)\n*/\nconst computeMultipleLCM = (numbers: number[]): number => {\n   return  numbers.reduce((acc, cur) => (acc * cur) / GCD(acc, cur) , numbers[0])\n}\n\n/* ------------------------------------------ Others ------------------------------------------ */\n\n/*\n  Advance Method 1: Functional Programming => 柯里化 Currying\n  Time complexity: O(log(min(a, b))) // 和前兩種方法一樣，歐幾里得算法的最差情況是連續的斐波那契數。\n  Space complexity: O(log(min(a, b))) // 因為遞迴深度取決於最小的數值，與遞迴版本相同。\n  Concept:\n    - 使用柯里化(Currying)技術，將 GCD 函式轉換為接受一個參數後，返回另一個接受第二個參數的函式。\n    - 每次呼叫 gcd(a)(b) 時，就會返回一個新的函式直到計算完成。\n    - 更具彈性，允許部分應用(Partial Application)，可以先固定一個參數，之後再傳入另一個參數。\n*/\nconst gcd = (a: number) => (b: number): number =>\n    b === 0 ? a : gcd(b)(a % b);\n\n// Test example\nconsole.log(gcd(48)(18)); // Output: 6\n// Partial application example\nconst gcdWith48 = gcd(48); \nconsole.log(gcdWith48(18)); // Output: 6\nconsole.log(gcdWith48(24)); // Output: 24\n\n/*\n  Advance Method 2: Functional Programming with Tail Call Optimization (TCO)\n  Time complexity: O(log(min(a, b))) \n  Space complexity: O(1) // With TCO, the stack usage remains constant.\n*/\nconst gcd = (a: number) => (b: number): number => {\n    // Inner function using tail-recursive optimization\n    const gcdTailRec = (x: number, y: number): number =>\n        y === 0 ? x : gcdTailRec(y, x % y);\n    return gcdTailRec(a, b);\n};\n\n// Test examples\nconsole.log(gcd(48)(18)); // Output: 6\nconsole.log(gcd(56)(98)); // Output: 14\n// Partial application example\nconst gcdWith56 = gcd(56);\nconsole.log(gcdWith56(98)); // Output: 14\nconsole.log(gcdWith56(28)); // Output: 28\n",s="\nconsole.log(GCD(18, 48)); // Output: 6\nconsole.log(gcdRecursive(18, 48)); // Output: 6\nconsole.log(gcdMultiple([48, 18, 30])); // Output: 6\n\nconsole.log(LCM(18, 48)); // Output: 144\nconsole.log(computeMultipleLCM([12, 18, 24]));";var p=(0,o.pM)({__name:"EuclideanAlgorithm",setup(n){(0,o.sV)((()=>{u().highlightAll()}));const e=(0,c.KR)(!1),i=(0,c.KR)("Copy"),l=()=>{e.value=!e.value},p=async()=>{try{await navigator.clipboard.writeText(m),i.value="Copied!",setTimeout((()=>{i.value="Copy"}),1500)}catch(n){console.error("Failed to copy: ",n)}};return(n,c)=>((0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("button",{class:"close-btn",onClick:c[0]||(c[0]=e=>n.$emit("close"))},"×"),c[7]||(c[7]=(0,o.Lk)("h2",null,"Euclidean Algorithm",-1)),c[8]||(c[8]=(0,o.Lk)("a",{href:"https://en.wikipedia.org/wiki/Euclidean_algorithm",target:"_blank"}," wiki - Euclidean_algorithm ",-1)),c[9]||(c[9]=(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"問題:"),(0,o.eW)(" 撰寫一個函式來計算兩個正整數最大公因數 ")],-1)),e.value?((0,o.uX)(),(0,o.CE)("div",d,c[1]||(c[1]=[(0,o.Lk)("p",null," 歐幾里得算法原理是反覆地用較大數除以較小數，直到餘數為 0，當餘數為 0 時，當前的除數就是這兩個數的最大公因數。 ",-1),(0,o.eW)(" 亦即: GCD(a, b) = GCD(b, a % b)。當除數等於零時，被除數為最大公因數。 ")]))):(0,o.Q3)("",!0),(0,o.Lk)("button",{id:"toggleShowMoreButton",onClick:l},(0,t.v_)(e.value?"(Hide)":"Click to Show More ↓"),1),c[10]||(c[10]=(0,o.Lk)("h3",null,"-- 我的解答 --",-1)),(0,o.Lk)("pre",a,[c[2]||(c[2]=(0,o.eW)("      ")),(0,o.Lk)("button",{class:"copy-btn",onClick:p},(0,t.v_)(i.value),1),c[3]||(c[3]=(0,o.eW)("\n      ")),(0,o.Lk)("code",{class:"language-javascript"},(0,t.v_)(m)),c[4]||(c[4]=(0,o.eW)("\n    "))]),c[11]||(c[11]=(0,o.Lk)("h3",null,"-- 測試用例 --",-1)),(0,o.Lk)("pre",{class:"test-block"},[c[5]||(c[5]=(0,o.eW)("      ")),(0,o.Lk)("code",{class:"language-javascript"},(0,t.v_)(s)),c[6]||(c[6]=(0,o.eW)("\n    "))])]))}}),g=i(6262);const b=(0,g.A)(p,[["__scopeId","data-v-7061b360"]]);var v=b}}]);
//# sourceMappingURL=447.087811e9.js.map