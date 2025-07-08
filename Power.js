//Write a function that returns the result of raising a given number to a specified power.

const calculate = (base,exponent)=>{

    //validation
    if(!Number.isInteger(base) || !Number.isInteger(exponent)){
        console.log("Only number input is allowed!")
        return;
    }

    if (base <= 0 || exponent <= 0) {
        console.log("Please give only positive number!");
        return;
    }


    //way one
    let result = 1;
    for(let i = 1; i<=exponent;i++){
        result = result*base;
    }

    //way two
    // const result = Math.pow(base,exponent)
    console.log(`${base} to the power of ${exponent} is `,result);

}

calculate(2,3);
calculate(5,4);
calculate(5,"df");
calculate(5,-5);
calculate(5,2);