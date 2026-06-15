/*
https://leetcode.com/problems/weighted-word-mapping/description/
*/

function mapWordWeights(words: string[], weights: number[]): string {
    let finalWord = '';

    for (const word of words) {
        let wordWeight = 0;
        for (const letter of word) {
            const letterIndex = letter.charCodeAt(0) - 97;

            const letterWeight = weights[letterIndex];

            if (letterWeight === undefined) continue;

            wordWeight += letterWeight;
        }

        const modulo26 = wordWeight % 26;

        finalWord += String.fromCharCode(122 - modulo26);
    }

    return finalWord;
};