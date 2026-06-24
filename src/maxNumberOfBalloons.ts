/*
https://leetcode.com/problems/maximum-number-of-balloons/
*/

function maxNumberOfBalloons(text: string): number {
    const target = new Map([
        ['b', 1],
        ['a', 1],
        ['l', 2],
        ['o', 2],
        ['n', 1],
    ]);

    const textCharCount = new Map<string, number>();

    for (const ch of text) {
        if (!target.has(ch)) continue;

        const count = textCharCount.get(ch) ?? 0;
        textCharCount.set(ch, count + 1);
    }

    let min = Infinity;
    for (const [k, v] of target.entries()) {
        const existsCount = textCharCount.get(k);
        if (existsCount === undefined) return 0;

        const proportion = Math.floor(existsCount / v);
        min = Math.min(min, proportion);
    }
    return min;
};

console.log('nlaebolko -> ', maxNumberOfBalloons('nlaebolko'));
console.log('loonbalxballpon -> ', maxNumberOfBalloons('loonbalxballpon'));
console.log('leetcode -> ', maxNumberOfBalloons('leetcode'));