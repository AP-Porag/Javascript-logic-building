//write a function that finds and print the maximum element in an array of numbers.

const maximum = (a) =>{

    //validation
    if(!a || a.length === 0){
       console.log("We need some number in the array!");
       return; 
    }

    let res = a.every(function(element){
        return typeof element === 'number'
    })

    if(!res){
        console.log("All element should be!");
        return; 
    }

    //way number one
    // a.sort((a,b)=>a-b);
    // console.log("The maximum number is ", a[a.length - 1])

    // way number two
    // let maximumNumber = a[0]
    // for(let i=1; i<a.length ;i++){
    //     if(maximumNumber < a[i]){
    //         maximumNumber = a[i];
    //     }   
    // }
    // console.log("The maximum number is ", maximumNumber)

    //way number three
    let maxNumber = Math.max(...a)
    console.log("The maximum number is ", maxNumber)
}

maximum([3,6,1,8,3,7,10,1002])