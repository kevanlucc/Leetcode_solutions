// Time Complexity: O(n) one pass on the input string
// Space Complexity: O(n) worse case is array is same length of input string

const isValid = s => {
    let stack = []
    let pairsHashMap = {'(': ')', '[': ']', '{': '}'};

    for (i = 0; i < s.length; i++) {
        let currentchar = s[i];
        
        if (pairsHashMap[currentchar])
            stack.push(currentchar);
        else if (pairsHashMap[stack.pop()] != currentchar)
            return false; 
    }

    return stack.length === 0;
};
