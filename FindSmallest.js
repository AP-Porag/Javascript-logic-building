//write a function that find and print the smallest number among three given numbers

const smallest = (num1,num2,num3)=>{
    if (Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3)){
        const numberArray = [num1,num2,num3];
        numberArray.sort((a,b)=>a-b);
        console.log("The smallest number is ", numberArray[0])
    }else {
        console.log("Please enter Numbers only")
    }

}

// smallest("aaccac",3,3)
smallest(3,5,1)
smallest(105,2,3)
