"use strict";(self["webpackChunkleetcode"]=self["webpackChunkleetcode"]||[]).push([[822],{5822:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var s=t(641),i=t(33),o=t(953),r=t(8848),a=t.n(r);const c={class:"problem-detail"},u={key:0},l='\n/* \n  模仿 API 資料串接\n*/\nconst fakeData = { // Value: 表示鄰近節點\n    "1": [2, 3, 4],\n    "2": [1, 5],\n    "3": [1, 5],\n    "4": [1, 6],\n    "5": [2, 3, 7],\n    "6": [4, 7],\n    "7": [5, 6]\n};\n\n// 模擬的 fetchNeighbours 函數，使用假資料\nasync function fetchNeighbours(node) {\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            resolve(fakeData[node] || []); // 若沒有對應節點，則回傳空陣列\n        }, 500); // 模擬網路延遲\n    });\n}\n\n/*\n  Time complexity: O()\n  Space complexity: O()\n*/\n\n// BFS 遍歷函數\nasync function bfs(start) {\n    const queue = [start];\n    const visited = new Set();\n    visited.add(start);\n\n    while (queue.length > 0) {\n        const currentNode = queue.shift();\n        console.log(currentNode);\n\n        const neighbours = await fetchNeighbours(currentNode);\n\n        for (const neighbour of neighbours) {\n            if (!visited.has(neighbour)) {\n                visited.add(neighbour);\n                queue.push(neighbour);\n            }\n        }\n    }\n}\n\n// DFS 遍歷函數\nasync function dfs(start) {\n    const stack = [start]; // 使用堆疊來模擬深度優先搜索\n    const visited = new Set();\n    visited.add(start);\n\n    while (stack.length > 0) {\n        const currentNode = stack.pop(); // 從堆疊頂部取出節點\n        console.log(currentNode);\n\n        const neighbours = await fetchNeighbours(currentNode);\n\n        for (const neighbour of neighbours) {\n            if (!visited.has(neighbour)) {\n                visited.add(neighbour);\n                stack.push(neighbour); // 將未訪問的鄰居推入堆疊\n            }\n        }\n    }\n}\n\n/*\n  # 優化\n  Time complexity: O()\n  Space complexity: O()\n*/\n\n\n',h="\n// 測試 BFS 從節點 1 開始\nbfs(1); // Output: --\n// 測試 DFS 從節點 1 開始\ndfs(1); // Output: -- ";var d=(0,s.pM)({__name:"BFSAndDFS",setup(n){(0,s.sV)((()=>{a().highlightAll()}));const e=(0,o.KR)(!1),t=()=>{e.value=!e.value};return(n,o)=>((0,s.uX)(),(0,s.CE)("div",c,[(0,s.Lk)("button",{class:"close-btn",onClick:o[0]||(o[0]=e=>n.$emit("close"))},"×"),o[6]||(o[6]=(0,s.Lk)("h2",null,"BFS / DFS",-1)),o[7]||(o[7]=(0,s.Lk)("a",{href:"https://en.wikipedia.org/wiki/Breadth-first_search",target:"_blank"}," https://en.wikipedia.org/wiki/Breadth-first_search ",-1)),o[8]||(o[8]=(0,s.Lk)("br",null,null,-1)),o[9]||(o[9]=(0,s.Lk)("a",{href:"https://en.wikipedia.org/wiki/Depth-first_search",target:"_blank"}," https://en.wikipedia.org/wiki/Depth-first_search ",-1)),o[10]||(o[10]=(0,s.Lk)("p",null,[(0,s.Lk)("strong",null,"問題:"),(0,s.eW)(" 兩個 ")],-1)),e.value?((0,s.uX)(),(0,s.CE)("div",u,o[1]||(o[1]=[(0,s.Lk)("p",null," -- ",-1)]))):(0,s.Q3)("",!0),(0,s.Lk)("button",{id:"toggleShowMoreButton",onClick:t},(0,i.v_)(e.value?"(Hide)":"Click to Show More ↓"),1),o[11]||(o[11]=(0,s.Lk)("h3",null,"-- 我的解答 --",-1)),(0,s.Lk)("pre",{class:"code-block"},[o[2]||(o[2]=(0,s.eW)("      ")),(0,s.Lk)("code",{class:"language-javascript"},(0,i.v_)(l)),o[3]||(o[3]=(0,s.eW)("\n    "))]),o[12]||(o[12]=(0,s.Lk)("h3",null,"-- 測試用例 --",-1)),(0,s.Lk)("pre",{class:"test-block"},[o[4]||(o[4]=(0,s.eW)("      ")),(0,s.Lk)("code",{class:"language-javascript"},(0,i.v_)(h)),o[5]||(o[5]=(0,s.eW)("\n    "))])]))}}),k=t(6262);const g=(0,k.A)(d,[["__scopeId","data-v-5030b2d9"]]);var p=g}}]);
//# sourceMappingURL=822.b2882bdb.js.map