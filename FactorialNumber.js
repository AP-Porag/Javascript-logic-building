//write a function that calculates the factorial of a given number

const factorialNumber = (number) => {
    if (number < 0) {
        console.log("Factorial of negative number doesn't exist");
        return;
    }
    if (Number.isInteger(number) === false) {
        console.log("Factorial of floating number and string doesn't exist");
        return;
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return console.log(`"Factorial of" ${number} is`,result)
};

factorialNumber(4);
factorialNumber(0);
factorialNumber(1.5);
factorialNumber('iisaffvacj');

const calculateFactorialUsingRecursion = (number) => {
    if (number < 0) {
        console.log("Factorial of negative number doesn't exist");
        return;
    }
    if (Number.isInteger(number) === false) {
        console.log("Factorial of floating number and string doesn't exist");
        return;
    }
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * calculateFactorialUsingRecursion(number - 1);
};
console.log("calculateFactorialUsingRecursion")
console.log(calculateFactorialUsingRecursion(4));
console.log(calculateFactorialUsingRecursion(0));
console.log(calculateFactorialUsingRecursion(1.5));
console.log(calculateFactorialUsingRecursion('iisaffvacj'));
