var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        // If it's an opening bracket, push the corresponding closing bracket onto the stack
        if (map[char]) {
            stack.push(map[char]);
        } else {
            // If it's a closing bracket, check if it matches the last opened bracket
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

module.exports = { isValid };
