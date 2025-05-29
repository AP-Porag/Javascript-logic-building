// write a function that calculates the area of a rectangle given its length and width
const calculateArea = (length,width)=>{
    if(length <= 0){
        throw new RangeError("Length should be a positive number")
    }

    if(width <= 0){
        throw new RangeError("Width should be a positive number")
    }

    const area = length*width;
    console.log("the area of the rectangle is "+area);
}
calculateArea(10,20);
//calculateArea(-10,-20);
