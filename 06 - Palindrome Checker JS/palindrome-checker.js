function palindrome(str) {
    // Good luck!
    let alphaRegex = /[a-z0-9]/gi;
    let alphaArray = str.toLowerCase().match(alphaRegex);
    console.log(alphaArray);
    for (let i = 0; i <= alphaArray.length / 2; i++) {
        if (alphaArray[i] != alphaArray[alphaArray.length - i - 1]) {
            return false;
        }
    }
    return true;
}