"use strict";(self["webpackChunkleetcode"]=self["webpackChunkleetcode"]||[]).push([[652],{5652:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var l=t(641),r=t(33),u=t(953),s=t(8848),o=t.n(s);const c={class:"problem-detail"},i={key:0},a='\n/*\n  Time complexity: O(n)\n  Space complexity: O(n)\n*/\nclass ListNode {\n    public val: number;\n    public next: ListNode | null;\n\n    constructor(val: number, next: ListNode | null = null) {\n        this.val = val;\n        this.next = next;\n    }\n\n    public static create(values: number[]): ListNode | null {\n        let dummy = new ListNode(0); // 虛擬頭節點\n        let current = dummy;\n        for (let val of values) {\n            current.next = new ListNode(val);\n            current = current.next;\n        }\n          /* FP 寫法\n            values.map((val) => {\n            current.next = new ListNode(val);\n            current = current.next;\n          */\n        });\n  \n        return dummy.next; // 返回真正的頭節點\n    }\n\n    public static print(head: ListNode | null): void {\n        let current = head;\n        let result: number[] = [];\n        while (current !== null) {\n            result.push(current.val);\n            current = current.next;\n        }\n        console.log(result.join(" -> "));\n    }\n\n      /* FP 寫法\n        public static printFunctional(head: ListNode | null): void {\n            const toArray = (node: ListNode | null, acc: number[] = []): number[] =>\n                node === null ? acc : toArray(node.next, [...acc, node.val]);\n\n            const result = toArray(head);\n            console.log(result.join(" -> "));\n        }   \n      */\n\n    public static addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {\n        let dummy = new ListNode(0); // 虛擬頭節點\n        let current = dummy;\n        let carry = 0; // 進位數值\n\n        while (l1 !== null || l2 !== null || carry > 0) {\n            let sum = carry;\n\n            if (l1 !== null) {\n                sum += l1.val; \n                l1 = l1.next;\n            }\n\n            if (l2 !== null) {\n                sum += l2.val;\n                l2 = l2.next;\n            }\n\n            carry = Math.floor(sum / 10);\n            current.next = new ListNode(sum % 10);\n            current = current.next;\n        }\n\n        return dummy.next;\n    }\n}\n\nconst l1 = ListNode.create([2, 3, 4]); // ListNode.print(l1); // 2 -> 3 -> 4 (432)\nconst l2 = ListNode.create([5, 6, 4]); // ListNode.print(l2); // 5 -> 6 -> 4 (465)\n\nconst result = ListNode.addTwoNumber(l1, l2);\nListNode.print(result); // 7 -> 9 -> 8 (897)\n',d="\nconst l1 = ListNode.create([2, 3, 4]); // ListNode.print(l1); // 2 -> 3 -> 4 (432)\nconst l2 = ListNode.create([5, 6, 4]); // ListNode.print(l2); // 5 -> 6 -> 4 (465)\nconst result = ListNode.addTwoNumber(l1, l2);\nListNode.print(result); // Output: 7 -> 9 -> 8 (897)";var L=(0,l.pM)({__name:"AddTwoNumbers",setup(n){(0,l.sV)((()=>{o().highlightAll()}));const e=(0,u.KR)(!1),t=()=>{e.value=!e.value};return(n,u)=>((0,l.uX)(),(0,l.CE)("div",c,[(0,l.Lk)("button",{class:"close-btn",onClick:u[0]||(u[0]=e=>n.$emit("close"))},"×"),u[6]||(u[6]=(0,l.Lk)("h2",null,"2_Add Two Numbers (medium)",-1)),u[7]||(u[7]=(0,l.Lk)("a",{href:"https://leetcode.com/problems/add-two-numbers/description/",target:"_blank"}," leetcode_2 ",-1)),u[8]||(u[8]=(0,l.Lk)("p",null,[(0,l.Lk)("strong",null,"問題:"),(0,l.eW)(" 兩個鏈結串列 (Linked List) 的節點數值和 ")],-1)),e.value?((0,l.uX)(),(0,l.CE)("div",i,u[1]||(u[1]=[(0,l.Lk)("p",null," 給定兩個非空的鏈結串列，分別代表兩個非負整數。這些數字以 逆序 (Reverse Order) 的方式儲存，每個節點包含一個數位 (Single Digit)。我們的任務是將這兩個數字相加，並以相同的鏈結串列形式返回它們的總和。 可以假設： 這兩個數字 不包含前置零 (除了數字 0 本身)。 輸入的鏈結串列中，節點的數值範圍為 0 到 9。 ",-1)]))):(0,l.Q3)("",!0),(0,l.Lk)("button",{id:"toggleShowMoreButton",onClick:t},(0,r.v_)(e.value?"(Hide)":"Click to Show More ↓"),1),u[9]||(u[9]=(0,l.Lk)("h3",null,"-- 我的解答 --",-1)),(0,l.Lk)("pre",{class:"code-block"},[u[2]||(u[2]=(0,l.eW)("      ")),(0,l.Lk)("code",{class:"language-javascript"},(0,r.v_)(a)),u[3]||(u[3]=(0,l.eW)("\n    "))]),u[10]||(u[10]=(0,l.Lk)("h3",null,"-- 測試用例 --",-1)),(0,l.Lk)("pre",{class:"test-block"},[u[4]||(u[4]=(0,l.eW)("      ")),(0,l.Lk)("code",{class:"language-javascript"},(0,r.v_)(d)),u[5]||(u[5]=(0,l.eW)("\n    "))])]))}}),m=t(6262);const p=(0,m.A)(L,[["__scopeId","data-v-730698f6"]]);var v=p}}]);
//# sourceMappingURL=652.bc9483d7.js.map