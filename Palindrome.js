//Write a function that checks if a string is palindrome or not.

const isPalindrome = (inputString) => {

    inputString = inputString.toLowerCase();

    //way one
    // for(let i=0; i <= inputString.length/2;i++){
    //     if(inputString[i] !== inputString[inputString.length - 1 -i]){
    //         return false
    //     }
    // }
    // return true;

    //way two
    // let start = 0;
    // let end = inputString.length - 1

    // for(start,end; start < end; start++,end--){
    //     if(inputString[start] !== inputString[end]){
    //         return false
    //     }
    // }
    // return true;

    //way three
    const reversedInputString = inputString.split('').reverse().join('');

    if(inputString === reversedInputString){
        return true;
    }else{
        return false;
    }
}

console.log("madam", isPalindrome('madam'));
console.log("level", isPalindrome('level'))
console.log("abba", isPalindrome('abba'));
console.log("Abba", isPalindrome('Abba'));
console.log("ashish", isPalindrome('ashish'));
console.log("porag", isPalindrome('porag'));