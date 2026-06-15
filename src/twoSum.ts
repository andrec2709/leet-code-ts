/* 
https://leetcode.com/problems/two-sum/
*/

function twoSum(nums: number[], target: number): number[] {
    // value => index in the array
    const numCache = new Map<number, number>();

    for (let index = 0; index < nums.length; index++) {        
        const num = nums[index];

        if (num === undefined) continue;

        const diff = target - num;

        const cached = numCache.get(diff);

        if (cached !== undefined) return [index, cached];

        numCache.set(num, index);
    }

    throw new Error('No two numbers in the array can add up to target');
}