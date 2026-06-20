/*
https://leetcode.com/problems/longest-palindromic-substring/
TODO: need to practice/study this exercise later, quite difficult
*/

// function longestPalindrome(s: string): string {
//     let longest = '';

//     for (let start = 0; start < s.length; start++) {
//         for (let end = start + 1; end <= s.length; end++) {
//             const substr = s.slice(start, end);
//             const reversed = substr.split('').reverse().join('');

//             if (substr === reversed) {
//                 longest = longest.length >= substr.length ? longest : substr;
//             }
//         }
//     }

//     return longest;
// };

// function longestPalindrome(s: string): string {
//     const check = (i: number, j: number) => {
//         let left = i;
//         let right = j - 1;

//         while (left < right) {
//             if (s.charAt(left) !== s.charAt(right)) return false;

//             left++;
//             right--;
//         }
//         return true;
//     };

//     for (let length = s.length; length > 0; length--) {
//         for (let start = 0; start <= s.length - length; start++) {
//             if (check(start, start + length)) {
//                 return s.substring(start, start + length);
//             }
//         }
//     }

//     return '';
// };

// function longestPalindrome(s: string): string {
//     const check = (i: number, j: number) => {
//         let left = i;
//         let right = j - 1;

//         while (left < right) {
//             if (s.charAt(left) !== s.charAt(right)) return false;

//             left++;
//             right--;
//         }
//         return true;
//     };

//     for (let length = s.length; length > 0; length--) {
//         for (let start = 0; start <= s.length - length; start++) {
//             if (check(start, start + length)) {
//                 return s.substring(start, start + length);
//             }
//         }
//     }

//     return '';
// };

// function longestPalindrome(s: string): string {
//     /*
//     "babad"
//     dp = [
//         ["b"/true, "ba"/false, "bab"/true, "baba"/false, "babad"/false],
//         [_/false, "a"/true, "ab"/false, "aba"/true, "abad"/false],
//         [_/false, _/false, "b"/true, "ba"/false, "bad"/false],
//         [_/false, _/false, _/false, "a"/true, "ad"/false],
//         [_/false, _/false, _/false, _/false, "d"/true]
//     ]
//     */
//     const n = s.length;
//     const dp = Array.from(Array(n), () => Array(n).fill(false));
//     let ans = [0, 0];

//     for (let i = 0; i < n; i++) {
//         dp[i]![i] = true;
//         ans = [i, i];
//     }

//     for (let i = 0; i < n - 1; i++) {
//         if (s[i] === s[i + 1]) {
//             dp[i]![i + 1] = true;
//             ans = [i, i + 1];
//         }
//     }

//     for (let diff = 2; diff < n; diff++) {
//         for (let i = 0; i < n - diff; i++) {
//             const j = i + diff;

//             if (s[i] === s[j] && dp[i + 1]![j - 1]) {
//                 dp[i]![j] = true;
//                 ans = [i, j];
//             }
//         }
//     }

//     let i = ans[0];
//     let j = ans[1];

//     return s.slice(i, j! + 1);
// }

function longestPalindrome(s: string): string {
    
}

// const s = 'babad';
// const s = 'cbbd';
// const s = 'a';
// const s = 'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa';
// const s = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const s = 'jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx';

console.log(longestPalindrome(s));