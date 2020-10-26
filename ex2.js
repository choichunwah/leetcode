const addTwoNumbers = function(l1, l2) {
    // Make first node
    const head = new ListNode(0);

    // Make storage
    let point = head;

    // Add when a + b > 9
    let append = 0;

    // Loop function
    const loop = (l1, l2, point) => {

        // When the next value is null for both arg
        if (l1 === null && l2 === null) {
            if (append == 1) {
                // If last num > 9, let the storage have 1, null
                point.next = new ListNode(1);
            }
            // Otherwise return node null, null
            return head.next;
        }

        // When at least one arg have value
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + append;

        // Make node 
        if (sum > 9) {
            point.next = new ListNode(sum % 10);
            append = 1;
        } else {
            point.next = new ListNode(sum);
            append = 0;
        }

        // Recursive for arg.next
        return loop(l1 ? l1.next : null, l2 ? l2.next : null, point.next);
    };

    // Lastly return the head
    // Head is there 
    // Point is for editing

    return loop(l1, l2, point)
};