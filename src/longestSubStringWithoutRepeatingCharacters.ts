/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
*/

// I'll keep this older solution here just for my own reference
// (to compare first solution vs the better definitive solution)
// function lengthOfLongestSubstring(s: string): number {
//     let chars: string[] = [];
//     let currentLongest = 0;
//     for (const letter of s) {
//         if (chars.includes(letter)) {
//             if (chars.length > currentLongest) {
//                 currentLongest = chars.length;
//             }
//             chars.push(letter);
//             chars = chars.slice(chars.findIndex((l) => l === letter) + 1);
//             continue;
//         }

//         chars.push(letter);
//     }
//     if (chars.length > currentLongest) {
//         currentLongest = chars.length;
//     }
//     return currentLongest;
// };

// function lengthOfLongestSubstring(s: string): number {
//     let chars = new Set<string>();
//     let currentLongest = 0;
//     for (const letter of s) {
//         if (chars.has(letter)) {
//             currentLongest = Math.max(chars.size, currentLongest);

//             for (const ch of chars.values()) {
//                 chars.delete(ch);

//                 if (ch === letter) {
//                     chars.add(ch);
//                     break;
//                 }
//             }

//             continue;
//         }

//         chars.add(letter);
//     }

//     currentLongest = Math.max(chars.size, currentLongest);

//     return currentLongest;
// };

function lengthOfLongestSubstring(s: string): number {
    let start = 0;
    let end = 0;
    // char => last known index in string
    let charCache = new Map<string, number>();
    let longest = 0;

    for (const char of s) {
        const cached = charCache.get(char);

        if (cached !== undefined) {
            if (cached >= start) {
                start = cached + 1;
            }
        }

        charCache.set(char, end);
        longest = Math.max(longest, end - start + 1);
        end++;
    }

    return longest;
};

// const s = "bbbbb";
// const s = "pwwkew";
// const s = "abcabcbb";
// const s = "dvdf";
// const s = "aabaab!bb";
// const s = 'advdfd';
// const s = 'bbtablud';
const s = 'tmmzuxt';

console.log(lengthOfLongestSubstring(s));
// lengthOfLongestSubstring(s);