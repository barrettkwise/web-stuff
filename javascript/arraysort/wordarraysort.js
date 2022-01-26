// Function for Sorting the array
// using a single loop
function sortArrays(array) {
 
        // Finding the length of array 'arr'
        let length = array.length;
 
        // Sorting using a single loop
        for (let j = 0; j < length - 1; j++) {
 
            // Type Conversion of char to int.
            let d1 = array[j];
            let d2 = array[j + 1];
 
            // Comparing the ascii code.
            if (d1 > d2) {
 
                // Swapping of the characters
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                j = -1;
            }
        }
        return array;
    }
function main2() {
// Declaring a String
let word = "zkitadvbhibpi";
 
// Declaring a character array
// to store characters of word in it.
let array = word.split("");
 
    document.write("Original array: ["
                           + array.join(", ")+"]<br>");
// Sorting the array using a single loop
array = sortArrays(array);
 
// Printing the sorted array.
document.write("Sorted array: ["
                   + (array).join(", ")+"]<br>");
} 