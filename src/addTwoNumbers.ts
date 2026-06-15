/*
https://leetcode.com/problems/add-two-numbers/description/
*/

class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val?: number, next?: ListNode) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let carry = 0;

    const dummy = new ListNode();

    let cur = dummy;

    let l1Next: ListNode | null = l1;
    let l2Next: ListNode | null = l2;

    while (l1Next || l2Next || carry !== 0) {

        const digitL1 = l1Next?.val ?? 0;
        const digitL2 = l2Next?.val ?? 0;

        const sum = digitL1 + digitL2 + carry;
        const digitResult = sum % 10;
        carry = Math.floor(sum / 10);

        const newNode = new ListNode(digitResult);
        cur.next = newNode;
        cur = newNode;

        l1Next = l1Next?.next ?? null;
        l2Next = l2Next?.next ?? null;

    }

    return dummy.next;
}