// write a function that calculate and print the sum of digits of a given number
function sumOfDigit(number){
    // Input validation
    if (typeof number !== 'number' || isNaN(number) || Number.isInteger(number) === false || number < 0) {
        console.log("Please enter a valid number");
        return;
    }
    const numberStr = number.toString();
    let result = 0;
    for(let i = 0;i < numberStr.length;i++ ){
        result = result + parseInt(numberStr[i],10);
    }
    console.log(`The sum of digits of ${number} is ${result}`);
}

sumOfDigit(123);
