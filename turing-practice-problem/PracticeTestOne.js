const calpoints = (ops) => {
 var result = null;
 let record = [];

 for (let i = 0; i < ops.length; i++) {
     if (ops[i] === "C") {
         record.pop();
     } else if (ops[i] === "D") {
         let lastElement = record[record.length - 1];
         record.push(lastElement * 2);
     } else if (ops[i] === "+") {
         record.push(record[record.length - 1] + record[record.length - 2]);
     } else {
         record.push(Number(ops[i]));
     }
 }
 for (let i = 0; i < record.length; i++){
     result += record[i];
 }

 return result;
}

console.log(calpoints(["5","-2","4","C","D","9","+","+"]))
