function swap(elements, index1, index2) {
    let temp = elements[index1];
    elements[index1] = elements[index2];
    elements[index2] = temp;
}

function partition(elements, leftPointer, rightPointer) {
    let pivot = elements[Math.floor((leftPointer + rightPointer) / 2)];

    while (leftPointer <= rightPointer) {
        // While left pointer is not further than right pointer
        while (
            elements[leftPointer] < pivot // While we don't find a smaller value than the pivot value
        )
            ++leftPointer;
        while (
            elements[rightPointer] > pivot // While we don't find a bigger value than the pivot value
        )
            --rightPointer;
        if (leftPointer <= rightPointer) {
            // Checking again if the left pointer isn't beyond right so we can swap values and move
            swap(elements, leftPointer, rightPointer);
            ++leftPointer;
            --rightPointer;
        }
    }
    return leftPointer; //End of partition
}

function quickSort(elements, leftPointer, rightPointer) {
    let lastIndex;

    if (elements.length > 1) {
        // If we have anything to sort

        lastIndex = partition(elements, leftPointer, rightPointer); // We get the new boundaries

        if (leftPointer < lastIndex - 1)
            quickSort(elements, leftPointer, lastIndex - 1);  //  Recursive function, repeat until element.length == 0
        if (lastIndex < rightPointer) quickSort(elements, lastIndex, rightPointer);
    }
    return elements;
}


  // Test
/* let arr = [6, 5, 8, 2, 7, 9, 1, 0];
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
 */