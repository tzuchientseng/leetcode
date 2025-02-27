"use strict";(self["webpackChunkleetcode"]=self["webpackChunkleetcode"]||[]).push([[715],{7715:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var l=n(641),i=n(33),s=n(953),o=n(8848),r=n.n(o);const a={class:"problem-detail"},d={key:0},u={class:"code-block"},c='\n/*\n  Time complexity: O(n log n)（每次遞迴 log n 層，每層 O(n) 合併）\n  Space complexity: O(1)（使用 next 指標原地排序，但遞迴棧使用 O(log n)）\n*/\nclass ListNode {\n  public val: number;\n  public next: ListNode | null;\n\n  constructor(val: number, next: ListNode | null = null) {\n    this.val = val;\n    this.next = next;\n  }\n\n  /* ------------------------------------------ create ------------------------------------------ */\n  public static create(values: number[]): ListNode | null {\n    const dummy = new ListNode(0);\n    let current = dummy;\n\n    values.forEach(value => {\n      current.next = new ListNode(value);\n      current = current.next;\n    });\n\n    return dummy.next;\n  }\n\n  /* ------------------------------------------ print ------------------------------------------ */\n  public static print(head: ListNode | null): void {\n    let current = head;\n    let result: number[] = [];\n\n    while (current !== null) {\n      result.push(current.val);\n      current = current.next;\n    }\n\n    console.log(result.join(" -> "));\n  }\n\n  /* ------------------------------------------ sortList (Merge Sort) ------------------------------------------ */\n    /* \n    💡Concept\n      Step 1: Find the middle of the list\n      Step 2: Recursively sort both halves. 賦值\n      Step 3: Merge the sorted halves\n    */\n  public static sortList(head: ListNode | null): ListNode | null {\n    if (!head || !head.next) return head; // Base case: empty or single node list\n\n    let mid: ListNode = ListNode.getMid(head);\n    let left: ListNode | null = head;\n    let right: ListNode | null = mid.next;\n    mid.next = null; // Split into two halves\n\n    left = ListNode.sortList(left);\n    right = ListNode.sortList(right);\n\n    return ListNode.merge(left, right);\n  }\n\n  /* ------------------------------------------ getMid (Find Middle Node) ------------------------------------------ */\n  private static getMid(head: ListNode): ListNode {\n    let slow = head;\n    let fast = head;\n\n    while (fast.next && fast.next.next) {\n      slow = slow.next!;\n      fast = fast.next.next;\n    }\n\n    return slow;\n  }\n\n  /* ------------------------------------------ merge (Merge Two Sorted Lists) ------------------------------------------ */\n  private static merge(left: ListNode | null, right: ListNode | null): ListNode | null {\n    let dummy = new ListNode(0);\n    let tail = dummy;\n\n    while (left && right) {\n      if (left.val < right.val) {\n        tail.next = left;\n        left = left.next;\n      } else {\n        tail.next = right;\n        right = right.next;\n      }\n      tail = tail.next;\n    }\n\n    // Append remaining nodes\n    tail.next = left || right;\n\n    return dummy.next;\n  }\n}\n',L='\nconst linkedList = ListNode.create([4, 2, 1, 3]);\nconsole.log("Original List:");\nListNode.print(linkedList);\n\nconst sortedList = ListNode.sortList(linkedList);\nconsole.log("Sorted List:");\nListNode.print(sortedList);';var h=(0,l.pM)({__name:"SortList",setup(e){(0,l.sV)((()=>{r().highlightAll()}));const t=(0,s.KR)(!1),n=(0,s.KR)("Copy"),o=()=>{t.value=!t.value},h=async()=>{try{await navigator.clipboard.writeText(c),n.value="Copied!",setTimeout((()=>{n.value="Copy"}),1500)}catch(e){console.error("Failed to copy: ",e)}};return(e,s)=>((0,l.uX)(),(0,l.CE)("div",a,[(0,l.Lk)("button",{class:"close-btn",onClick:s[0]||(s[0]=t=>e.$emit("close"))},"×"),s[7]||(s[7]=(0,l.Lk)("h2",null,"148_Sort List",-1)),s[8]||(s[8]=(0,l.Lk)("a",{href:"https://leetcode.com/problems/sort-list/description/",target:"_blank"}," leetcode_148 ",-1)),s[9]||(s[9]=(0,l.Lk)("p",null,[(0,l.Lk)("strong",null,"問題:"),(0,l.eW)(" 我們要對一個單向鏈表 (Singly Linked List) 進行排序，並返回排序後的鏈表。 ")],-1)),t.value?((0,l.uX)(),(0,l.CE)("div",d,s[1]||(s[1]=[(0,l.Lk)("p",null," O(n log n) 時間複雜度 和 O(1) 空間複雜度 來解題。 ",-1)]))):(0,l.Q3)("",!0),(0,l.Lk)("button",{id:"toggleShowMoreButton",onClick:o},(0,i.v_)(t.value?"(Hide)":"Click to Show More ↓"),1),s[10]||(s[10]=(0,l.Lk)("h3",null,"-- 我的解答 --",-1)),(0,l.Lk)("pre",u,[s[2]||(s[2]=(0,l.eW)("      ")),(0,l.Lk)("button",{class:"copy-btn",onClick:h},(0,i.v_)(n.value),1),s[3]||(s[3]=(0,l.eW)("\n      ")),(0,l.Lk)("code",{class:"language-javascript"},(0,i.v_)(c)),s[4]||(s[4]=(0,l.eW)("\n    "))]),s[11]||(s[11]=(0,l.Lk)("h3",null,"-- 測試用例 --",-1)),(0,l.Lk)("pre",{class:"test-block"},[s[5]||(s[5]=(0,l.eW)("      ")),(0,l.Lk)("code",{class:"language-javascript"},(0,i.v_)(L)),s[6]||(s[6]=(0,l.eW)("\n    "))])]))}}),p=n(6262);const g=(0,p.A)(h,[["__scopeId","data-v-d67004b0"]]);var v=g}}]);
//# sourceMappingURL=715.b38d0b8e.js.map