/*
*   Search if two numbers in the array is equal to the target sum
*/
function twoNumberSum(array, targetSum) {
    const l = array.length;
    for (let i = 0 ; i < l ; i++) {
        for (let j = i + 1 ; j < l ; j++) {
            if(array[i] + array[j] === targetSum){
                return [array[i], array[j]];
            }
        }
    }

    return [];
}

//opti
function twoNumberSum(a,t){const l=a.length;for(let i=0;i<l;i+=1){for(let j=i+1;j<l;j+=1){if(a[i]+a[j]===t){return[a[i],a[j]]}}}return[]}

console.time('toto');
console.log(twoNumberSum([5, 3 ,5 ,8 ,9], 17));
console.timeLog('toto');
exports.twoNumberSum =  twoNumberSum;