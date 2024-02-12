// Easy
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
// Example 1:
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:
// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
// function sortSentence(s: string): string {
//     const arr = s.split(" ")
//     return arr.sort((a, b) => (a[a.length - 1] as any) - (b[b.length - 1] as any)).map(word => word.slice(0, word.length - 1)).join(" ")
// };
function sortSentence(s) {
    var arr = s.split(" ");
    var newArry = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        var number = word[word.length - 1];
        newArry[number] = word.slice(0, word.length - 1);
    }
    return newArry.join(" ").trim();
}
;
// Time O(n)
// Space O(n)
console.log(sortSentence("Myself2 Me1 I4 and3"));
console.log(sortSentence("is2 sentence4 This1 a3"));
