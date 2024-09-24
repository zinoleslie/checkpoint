
// function that reverse a string
function reverseString() {
    let inputtext = prompt("input your text?");
    reversedtext = inputtext.split('').reverse().join('');
    console.log(reversedtext);
}
 reverseString()


 // craete a function to count the number of  characters in a string

 function textCount() {
    let input = prompt("input your text");
    let countedtext = input.length;
    console.log(countedtext);
 }

 textCount();

 // capitalize the first letter in a string 
 function capword() {
    let sentence = prompt("input your text");
    let CapText = sentence.charAt(0).toLocaleUpperCase()+sentence.slice(1)
    console.log(CapText);
 }
 capword()


 //write a function to find the highest  and lowest number in an array

 function maxnum() {
    const arrnum = [20, 60, 50, 100, 70]
    let max = arrnum[0];
        //loop
        for(let i = 0; i < arrnum.length; i++) {
           if(arrnum[i]>max) {
               max = arrnum[i];
           }
        }
        return max
    }
 maxnum()

 function findLowestNumber(arr) {
    if (arr.length === 0) {
        return null; // Handle empty array case
    }

    let lowest = arr[0]; // Assume the first number is the lowest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i]; // Update lowest if a smaller number is found
        }
    }

    return lowest;
}

function findLowestNumber(arr) {
    if (arr.length === 0) {
        return null; // Handle empty array case
    }

    let lowest = arr[0]; // Assume the first number is the lowest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i]; // Update lowest if a smaller number is found
        }
    }

    return lowest;
}

