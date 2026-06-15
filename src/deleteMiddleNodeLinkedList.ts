/*
https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
*/


// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head?.next) return null;

    let slow: ListNode | null = head;
    let fast = slow?.next?.next ?? null;
    while (fast && fast.next) {
        slow = slow?.next ?? null;
        fast = fast.next.next;
    }

    if (!slow) throw new Error('');

    slow.next = slow?.next?.next ?? null;

    return head;
};