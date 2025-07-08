//write a function that counts and print the number of vowels and consonant in a given string

const calculateVowelsAndConsonant = (inputString) =>{

    let processedInputString = inputString.toLowerCase().replace(/ /g,'');

    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';

    let vowelCount = 0;
    let consonantCount = 0;

    for(let i = 0; i<processedInputString.length;i++){
        if(vowels.includes(processedInputString[i])){
            vowelCount++;
        }
        //way one
        // else if(consonants.includes(processedInputString[i])){
        //way two
        else if(/^[a-z]$/.test(processedInputString[i])){
            consonantCount++;
        }
        else{
            console.log(`${processedInputString[i]} is neither vowel nor consonant!`)
        }
    }



    console.log(`Total vowels count is ${vowelCount} and total consonant count is ${consonantCount} in ${inputString}`)

}

calculateVowelsAndConsonant('Hello World 7')