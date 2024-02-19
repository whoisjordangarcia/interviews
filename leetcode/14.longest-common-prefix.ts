/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// [flowers, flow, flight]
// prefix[0]=flowers
// flowers = flow
// prefix=flow
// ---
// flor = flights
// prefix=fl

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 0) return "";

  let prefix = strs[0];
  for (var i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
        console.log(prefix,strs[i])
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(prefix)
      if (prefix == "") return "";
    }
   
    console.log('--next--')
  }

  return prefix;
}
// @lc code=end


console.log(longestCommonPrefix(["flower","flow","flight"]) === 'fl')