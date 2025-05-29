//write a function taht generates and prints the multiplication table for  a given number upto specified range
const multiplicationTable = (number, range) => {
    if (typeof number !== 'number' || Number.isInteger(number) === false || number < 0) {
        console.log("Please enter a valid number for number");
        return;
    }
    if (typeof range !== 'number' || Number.isInteger(range) === false || range < 0) {
        console.log("Please enter a valid number for range");
        return;
    }
    for (let i = 1; i <= range; i++) {
        console.log(`${i} * ${number} = ${i * number}`);
    }
}
multiplicationTable(4.1,10)
