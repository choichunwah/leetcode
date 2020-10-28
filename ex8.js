var myAtoi = function(s) {
    s = s.trim()

    if (
        ((s.charAt(0) == "-" || s.charAt(0) == "+") && parseInt(s.charAt(1)) >= 0) ||
        parseInt(s.charAt(0)) >= 0
    ) {

        let int = parseInt(s)

        if (int <= Math.pow(-2, 31)) {
            return Math.pow(-2, 31)
        } else if (int >= Math.pow(2, 31)) {
            return Math.pow(2, 31) - 1
        } else {
            return int
        }

    } else {
        return 0
    }
};