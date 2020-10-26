var lengthOfLongestSubstring = function(s) {
    let largest = 0

    if (s.length < 2) {
        return s.length
    }

    if (s.length == 2) {
        s[0] == s[1] ? largest = 1 : largest = 2
        return largest
    }

    if (s.length > 2) {
        for (let i = 0; i < s.length; i++) {
            let array = []
            array.push(s[i])

            for (let j = i + 1; j < s.length; j++) {
                if (!(array.includes(s[j]))) {
                    array.push(s[j])
                } else {
                    break
                }
            }
            array.length > largest ? largest = array.length : null
        }
    }
    return largest
};