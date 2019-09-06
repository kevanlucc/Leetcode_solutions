/* 
 Time Complexity: O(NMlogM) where N is number of strings and M is the length of strings, sort function uses merge sort, which has O(nlogN) time complexity
 Space Complexity: O(NK) size of the grouped hash map
*/

function groupAnagrams(strs) {
    let grouped = [];

    for (let i = 0; i < strs.length; i++) {
        const word= strs[i];
        const key = word.split('').sort().join();

        if (!grouped[key]) { // if key not in group make an empty array and fill it
            grouped[key] = []
        };

        grouped[key].push(word);
    }

    return Object.values(grouped);
}
