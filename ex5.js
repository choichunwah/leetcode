var longestPalindrome = function(s) {
    if (s.length == 1) {
        return s
    }

    if (s.length == 2) {
        return s[0] == s[1] ? s : s[0]
    }

    if (s.length > 2) {
        let answer = s[0]

        for (let i = 0; i < s.length; i++) {
            const checkOdd = (startNum) => {
                if (s[i - startNum] && s[i + startNum] && s[i - startNum] == s[i + startNum]) {
                    let a = s.substring(i - startNum, i + startNum + 1)

                    answer = a.length > answer.length ? a : answer
                    checkOdd(startNum + 1)
                } else {
                    return
                }
            }

            const checkEven = (startNum) => {
                if (s[i - startNum + 1] && s[i + startNum] && s[i - startNum + 1] == s[i + startNum]) {
                    let b = s.substring(i - startNum + 1, i + startNum + 1)

                    answer = b.length > answer.length ? b : answer
                    checkEven(startNum + 1)
                } else {
                    return
                }
            }

            checkOdd(1)
            checkEven(1)
        }
        return answer
    }
};