var reverse = function(x) {
    x = x.toString()

    if (x.length == 1) {
        return x
    }

    let answer

    if (x.length > 1 && x.charAt(0) != "-") {
        let array = x.split("")
        array = array.reverse()
        answer = array.join("")

        answer = parseInt(answer)
    }

    if (x.length > 1 && x.charAt(0) == "-") {
        y = "-"
        z = x.substring(1)

        let array = z.split("")
        array = array.reverse()
        answer = array.join("")

        answer = parseInt(y + answer)
    }

    let min = Math.pow(-2, 31)
    let max = Math.pow(2, 31)

    answer = answer >= min && answer <= max ? answer : 0
    return answer
};