//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_string = "Hello Tez, my name is john and I have blue eyes"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string){
    dog_string = dog_string.split()
    for(let dog of dog_names){
        if (dog = dog_string){
            return "Matched ${dog_name}";
        }
        else{
            return "No Match";
        }
    }
}
console.log(findWords(dog_string))
//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        minus = 0,
        len = arr.length;
        if (i % 2 == 1){
            arr.splice(i - minus, 1);
            minus++;
            return arr
        }
    }
}
console.log(replaceEvens(given_arr));
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const checkNum = (even_or_odd) => {
    if (even_or_odd % 2 == 0){
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(checkNum(5))

// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = (sword) => {
    let words = sword.split(' ');
    let shortest = words.sort(() => {
        return shortest.length < shortest.length
    })
    return shortest.length
}
console.log(findShort('letter', 'number', 'word', 'sentence'))