var findMedianSortedArrays = function(nums1, nums2) {
    const numsT = [...nums1, ...nums2]

    numsT.sort((a, b) => {
        return a - b
    })

    if (numsT.length % 2 == 0) {
        const firstNum = numsT[numsT.length / 2]
        const secondNum = numsT[numsT.length / 2 - 1]
        return (firstNum + secondNum) / 2
    } else {
        return numsT[Math.floor(numsT.length / 2)]
    }
};