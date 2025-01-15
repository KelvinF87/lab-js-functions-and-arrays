// Iteration 1 | Find the Maximum
function maxOfTwoNumbers( num1, num2) {
    let maxNum = Math.max(num1, num2);
    return maxNum;
}
console.log(maxOfTwoNumbers( 20,21))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(listWords) {
    let longest="";
    if (listWords.length === 0){
        return null;
    }else{

        for(let word of listWords ){
            if(word.length > longest.length){
                longest= word
            } 
        }
        
        return longest;
    }
}

console.log(findLongestWord(words))


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total=0;
    for (let num  of numbers) {
       total+=num
            
    }

    return total
}

sumNumbers(numbers)




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let total=0;
    if(numbers2.length!==0){

        let conteo = numbers2.length
        for (let num  of numbers2) {
            total+=num
            
        }
        return total/conteo
    }else{
        return 0
    }

}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,search) {
    if (words2.includes(search)){
        return true;
    }else if(words2.length==0){
        return null
    }
    else{
        return false;
    }
}
