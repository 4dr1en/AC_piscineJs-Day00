/*
*   Search if two numbers in the array is equal to the target sum
*/
function twoNumberSum(array, targetSum) {
    for (let i = 0 ; i < array.length ; i++) {
        for (let j = i + 1 ; j < array.length ; j++) { // wow optimisation !
            if(array[i] + array[j] === targetSum){
                return [array[i], array[j]];
            }
        }
    }

    return [];
}

console.time('toto');
console.log(twoNumberSum([5, 3 ,5 ,8 ,9], 17));
console.timeLog('toto');
exports.twoNumberSum =  twoNumberSum;