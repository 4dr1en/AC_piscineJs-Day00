/*
* Reltun true if the string is a palindrome
*/
function isPalindrome(string){
    for (let i = 0 ; i < Math.ceil(string.length/ 2) ; i++) {
        if(string[i] !== string[string.length - 1 - i]) 
            return false;
    }
    return true;
}
    
exports.isPalindrome =  isPalindrome;