// write a function that tells if a given number is even or odd
const isEvenOrOdd =(number)=>{
    const remainder = number%2;

    remainder === 0 ? console.log(`The number ${number} is even, the remainder is`, remainder) : console.log(`The number ${number} is odd, the remainder is`, remainder);
}
isEvenOrOdd(13)
isEvenOrOdd(-1)
isEvenOrOdd(157)
isEvenOrOdd(144)
isEvenOrOdd(0)
isEvenOrOdd(-2)
