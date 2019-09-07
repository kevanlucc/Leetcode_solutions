/*
  Time complexity: O(n)
  Space complexity: O(1) Can contain at most 26 key value pairs
*/
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    
    const sCharCounts = {}; // create hash table that counts all chars seen

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1; // add one if char already present or not
    }

    for (let i = 0; i < t.length; i ++) {
        const tChar = t[i];
        if (!sCharCounts[tChar]) // works even with 0
            return false;
        else 
            sCharCounts[tChar]--;
        
    }
    return true;
}
