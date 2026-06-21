// function isPalindrome(x: number): boolean {
//     // negatives will never be (e.g. -1 vs 1-)
//     if (x < 0) return false;

//     // 1-digit numbers
//     if (x >= 0 && x <= 9) return true;

//     const str = x.toString();

//     let start = 0;
//     let end = str.length === 0 ? 0 : str.length - 1;

//     while (start <= end) {
//         if (str[start] !== str[end]) return false;
//         start++;
//         end--;
//     }
//     return true;
// };

function countDigits(x: number): number {
    const abs = Math.trunc(Math.abs(x));

    // Math.log*(0) returns -Infinity
    if (abs === 0) return 1;

    return Math.trunc(Math.log10(abs) + 1);

    // let res = Math.trunc(Math.abs(x / 10));
    // // console.log(res);
    // let digits = 1;
    // while (res !== 0) {
    //     res = Math.trunc(Math.abs(res / 10));
    //     digits++;
    // }

    // return digits;
}

// function isPalindrome(x: number): boolean {
//     // negatives will never be (e.g. -1 vs 1-)
//     if (x < 0) return false;

//     // 1-digit numbers
//     if (x >= 0 && x <= 9) return true;

//     let ref = x;
//     let reversed = 0;
//     const totalDigits = countDigits(x);
//     for (let i = 1; i <= totalDigits; i++) {
//         const digit = ref % 10;
//         reversed += digit * Math.pow(10, totalDigits - i);

//         ref = Math.trunc(ref / 10);
//     }
//     return reversed === x;
// };

function isPalindrome(x: number): boolean {
    // negatives will never be (e.g. -1 vs 1-)
    if (x < 0) return false;

    // 1-digit numbers
    if (x >= 0 && x <= 9) return true;

    const totalDigits = countDigits(x);
    let ref = x;
    
    for (let i = 1; i <= totalDigits; i += 2) {
        const l = Math.trunc(ref / Math.pow(10, totalDigits - i));
        const r = ref % 10;
        
        if (l !== r) return false;

        console.log(`ref: ${ref}, l: ${l}, r: ${r}, i: ${i}`);

        ref = Math.trunc(ref / 10);
        ref = ref % Math.pow(10, totalDigits - i - 1);
    }
    return true;
};

const t = 12421;

console.log(isPalindrome(t));
// console.log(countDigits(99999));