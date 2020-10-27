const convert = function(s, numRows) {

    if (numRows == 1) {
        return s
    }

    const map = {}

    for (let i = 0; i < numRows; i++) {
        map[i] = []
    }

    let count = 0
    let upward = true
    let j = 0

    while (j < s.length) {
        console.log(s[j], count, upward)

        if (count < numRows - 1 && upward == true) {
            map[count].push(s[j])
            count++
        } else if (count == numRows - 1 && upward == true) {
            map[count].push(s[j])
            count--
            upward = false
        } else if (count == 0 && upward == false) {
            map[count].push(s[j])
            count++
            upward = true
        } else if (count < numRows && upward == false) {
            map[count].push(s[j])
            count--
        }

        j++
    }

    let answer = ""

    for (let i = 0; i < numRows; i++) {
        let temp = map[i].join('')
        answer = answer + temp
    }
};

convert("PAYPALISHIRING", 3);

convert("AB", 1);