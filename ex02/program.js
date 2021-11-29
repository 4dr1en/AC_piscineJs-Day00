/*
* Get the three highter numbers in the array
*/
function threeLargestNumbers(array){
    const threeLargestNumbers = [array[0], array[1], array[2]];
    for (let i = 3; i < array.length; i++) {

        // get the lowest number in the array of hightest
        let keyLowest = 0;
        for (let j = 1; j < threeLargestNumbers.length; j++) {
            if(threeLargestNumbers[j] < threeLargestNumbers[keyLowest]){
                keyLowest = j; 
            }
        }

        // if the current number is highter replace the lowest number in the array of results
        if(threeLargestNumbers[keyLowest] < array[i]){
            threeLargestNumbers[keyLowest] = array[i]; 
        }
    }
    return threeLargestNumbers.sort((a, b) => a - b);
}

console.log(threeLargestNumbers([141, 1, 17]));


// Merci de ne pas effacer la ligne en dessous.
exports.threeLargestNumbers =  threeLargestNumbers;