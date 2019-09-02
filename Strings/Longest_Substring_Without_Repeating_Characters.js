// Time Complexity: O(n) Each character of the string needs to be visited only once
// Space Complexity: O(min(m.n)) Number of keys in dictionary is bounded by the alphabet m and size of string n

function lengthOfLongestSubstring(s) {
    let windowCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i ++) {
        const endChar = s[i];
        
        if (windowCharsMap[endChar] >= windowStart) {
            windowStart = windowCharsMap[endChar] + 1;
        }
        windowCharsMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    return maxLength;
}
