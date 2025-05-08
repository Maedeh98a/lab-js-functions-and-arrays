// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1,  number2) {
    let maxNumber = number1;
    if(number1 > number2){
        maxNumber = number1;
    }
    else if(number2 > number1){
        maxNumber = number2
    }
    return maxNumber;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    let longestWord = " ";
    if (wordsArray.length === 0){
        return null;
    }
    else{
    wordsArray.forEach(word => {
        if(word.length > longestWord.length){
            longestWord = word;
            console.log(longestWord)
        }
    });
    
    
    return longestWord;
}
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    let sumOfNumbers = 0;
    numbersArray.forEach(number => {
        sumOfNumbers += number;
    })

    return sumOfNumbers;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {

    if(numbersArray.length === 0){
        return 0;
    }
    else{

    let totalOfNumbers = sumNumbers(numbersArray);
    let averageOfNumbers = (totalOfNumbers)/(numbersArray.length);

    return averageOfNumbers;

    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, desiredWord) {


    let isExist = false;
    if (wordsArray.length === 0){
        return null;
    }
    else{
        wordsArray.forEach(word => {
            if(word === desiredWord){
                isExist = true;
            
            }
        })
        return isExist;
    }
    
}
