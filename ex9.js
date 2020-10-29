const isPalindrome = function(x) {

    if (x == 0) {
        return true
    }

    if (x > 0 && x % 10 != 0) {

        const getPowerOf10BaseLog = (power) => {
            return Math.log(power) / Math.log(10);
        }

        let reminder = x

        const numberOfIntegers = Math.floor(getPowerOf10BaseLog(reminder))
        const integers = []
        let remainedNumberOfIntegers = numberOfIntegers
        let integer = 0

        const handle = () => {
            let baseToFindInteger = Math.pow(10, remainedNumberOfIntegers)
            integer = Math.floor(reminder / baseToFindInteger)
            reminder = reminder - integer * baseToFindInteger
            remainedNumberOfIntegers--
        }

        if ((numberOfIntegers + 1) % 2 == 1) {
            while (remainedNumberOfIntegers >= numberOfIntegers / 2) {
                if (remainedNumberOfIntegers > numberOfIntegers / 2) {
                    handle()
                    integers.push(integer)
                } else {
                    handle()
                }
            }
        } else {
            while (remainedNumberOfIntegers >= (numberOfIntegers + 1) / 2) {
                handle()
                integers.push(integer)
            }
        }

        let result = 0

        for (let index in integers) {
            result += parseInt(integers[index]) * Math.pow(10, parseInt(index))
        }

        return reminder - result == 0 ? true : false
    } else {
        return false
    }
};