//### ex04

function levDist(str1, str2) {
    if(str1.length == 0) return str2.length;
    if(str2.length == 0) return str1.length;

    if (str1[0] == str2[0]) {
        return levDist(str1.slice(1), str2.slice(1));
    } else {
        return 1 + Math.min(
            levDist(str1.slice(1), str2),
            levDist(str1, str2.slice(1)),
            levDist(str1.slice(1), str2.slice(1)),
        )
    }
}


str1 = "abcg"
str2 = 'adcd'

console.time('toto');
console.log(levDist(str1, str2));
console.timeEnd('toto');

// Merci de ne pas effacer la ligne en dessous.
exports.levDist =  levDist;