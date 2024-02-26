// Testing javascript link through web console
console.log('testing')

// Multi-line Comment

// Declaring a variable using var (the old way)
var firstName = 'Tez';
consol.log(firstName);
// Reassigning values
firstName = 'Tezco';
console.log(firstName);
// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
var students = ['tommy, tez, sarah, andrew']
var bio = {
    firstname: 'Tez',
    lastName: 'Wright'
    
}
console.log(bio);
// strings in js
consol.log(`Hi my name is ${firstName}`);
// Arrays AKA Python Lists
var student = ['Tommy', 'Tez', 'Sarah', 'Andrew']
console.log(students)
// Objects AKA Python Dicts
var bio = {
    firstName: 'Tez',
    lastName: 'Wright',
    location: 'Texas'
}
console.log(bio)
// Hoisting
let tezNumber = 7;
console.log(tezNumber)


/* 
- NOTE: Instead of using VAR to define variables, use LET and CONST (Modern Way)
- Not only because of var hoisting behaviors can be tricky, but so you don't
accidentally re-declare a variable that already exists.
- LET and CONST are also variable declarations using the ES6 Syntax but do allow
for re-declaration.

- LET vs CONST
- let: allows for reassignment of values (Just like Python)
- const: does NOT allow for reassignment of values 
*/

// let
let favSuperHero = 'Superman'
console.log(favSuperHero)
favSuperHero = 'Batman'
consol.log(favSuperHero)
// const
const birthday = 'June 25th'
console.log(birthday)
// const doesn't change 
// ------------------------ Math Operations ----------------------------
let num = 0
// Addition
console.log(num+=2)
// Incrementing

// Increment by 1
console.log(num+=1)
console.log(num)

// Subtraction
console.log(num-=2)

// Decrement by 1
console.log(num--)
console.log(num)
// Decrementing

// Multiplication
console.log(num*=5)

// Division
console.log(num/=2)

// Exponents
console.log(num**2)

// ---------- Math is a built-in for javascript ---------------

// Math.floor()
console.log(Math.floor(3.14))

// Math.ceil()
console.log(Math.ceil(3.14))

// Watch out for these behaviors when adding number and strings
console.log(8 + '5')
// dont do this make sure it's the same data type before adding

// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python
function goatPlayer(name){
    return name
}

goatPlayer('michael jordan')

// Function Expression
const goatPlayer = function(name){
    return name
}
console.log(goatPlayer('kobe bryant'))

// Arrow Function (ES6)
const goatPlayer = (name) => {
    return name
}
console.log(goatPlayer('kobe bryant'))
// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }
const checkTemp = (temp) => {
    if(temp < 65){
        return 'its cold outside';
    }
    else if (temp < 85){
        return 'its a beautiful day';
    }
    else {
        return 'its hot outside';
    }
}

console.log(checkTemp(86))

// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)

let grade = 85
console.log(grade > 80 ? 'Pass' : 'Fail')

// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
let movies = ['Civil War', 'Barbie', 'Scott Pilgrim']

// loop through an array
for(let i=0; i<movies.length; i++){
    console.log(movies[i])
}


// loop through an array with for-of loop (values) (ES6)
for(let movie of movies){
    console.log(movie)
}

// loop through an array with for-in loop (indices) (ES6)
for (let idx in movies){
    console.log(movies[idx])
}

// ----- While Loops -----
let whileNum = 0

while(whileNum < 10){
    console.log(whileNum)
    whileNum+=1
}
// Do-While
do {
    console.log(whileNum)
    whileNum+=1
} while(whileNum < 10)
// Syntax: do {code block} while (condition)
// NOTE: It is guaranteed to run once

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown']

// index
console.log(artists[1])
// indexing from the end
consol.log(artists[artists.length-1])

// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types
console.log(artists.toString())

// joining an array with a seperator
// syntax: array.join(seperator)
console.log(artists.join('thieves'))
// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
console.log(artists.slice(0,2))
console.log(artists)

// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)