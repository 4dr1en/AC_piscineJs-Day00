//### ex04

//Premier caractère non répeté

function levDist(str1, str2){
    var i, j, n, m, d, cost, min, a, b;
    n = str1.length;
    m = str2.length;
    if (n == 0) return m;
    if (m == 0) return n;
    d = new Array(n+1);
    for (i = 0; i <= n; i++) d[i] = new Array(m+1);
    console.log(d);
    for (i = 0; i <= n; i++) d[i][0] = i;
    for (j = 0; j <= m; j++) d[0][j] = j;
    for (i = 1; i <= n; i++) {
        a = str1.charAt(i - 1);
        for (j = 1; j <= m; j++) {
            b = str2.charAt(j - 1);
            if (a == b) {
                cost = 0;
            } else {
                cost = 1;
            }
            d[i][j] = min3(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1]+cost);
        }
    }
    return d[n][m];
}

function min3(a, b, c) {
    return (a < b ? (a < c ? a : c) : (b < c ? b : c));
}
str1 = "moi je mange des pates"
str2 = 'lui il mange du fromage'

console.time('toto');
console.log(levDist(str1, str2));
console.timeEnd('toto');
// Merci de ne pas effacer la ligne en dessous.
exports.levDist =  levDist;