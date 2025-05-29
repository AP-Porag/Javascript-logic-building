//write a function that tells if provided year is a leap year or not
 const isLeapYear = (year) => {
        return year % 4 === 0;
 }

 console.log("2000 is a leap year: ",isLeapYear(2000));
 console.log("2004 is a leap year: ",isLeapYear(2004));
 console.log("2024 is a leap year: ",isLeapYear(2024));
 console.log("2025 is a leap year: ",isLeapYear(2025));
