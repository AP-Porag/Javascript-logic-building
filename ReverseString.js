//write a function that returns the reverse of a string

const reverseString=(s)=>{
    if (typeof s !== 'string'){
        return 'Please enter a string';
    }
    //solution one
   // return s.split("").reverse().join("");

    //solution two
    let result = "";
    for (let i = s.length - 1; i>=0; i--){
        result = result + s[i];
    }
    return result;
}
console.log(reverseString('Asraf'));
console.log(reverseString('Software Development'));
console.log(reverseString(123456789));
