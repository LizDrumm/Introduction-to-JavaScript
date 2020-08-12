/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

/*let votingAge= '19';
if (votingAge >'18'){
    return true;
}
console.log (votingAge);*/

let votingAge= '19';
if (votingAge >'18'){
    console.log (true);
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let color = "blue"
let opinion = "harsh";
if(opinion === "soft"){
    color = "blue";
}
else if (opinion === "harsh"){
    color = "red";
}
console.log (color);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year = "1999"
console.log(Number(year));

//Task d: Write a function to multiply a*b 

           //used a function declaration

function multiply (a,b){
    return a*b;
}
console.log (multiply(2,5));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function multiply(age,dogYears) {
return age * dogYears;
}
console.log (multiply (29,7));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996


function pounds(age, weight){

if (age>=1 && weight<=5){
        return .05*weight;
}
else if (age>=1 && weight>5 && weight<=10){
   return .04*weight;
}
else if (age>=1 && weight>11 && weight<=15){
    return .03*weight;
}
else if (age>=1 && wight>15) {
    return .02*weight;
}
else if (age<1 && age >= .583) {
    return .04 *weight;
}
else if (age <.583 && age >=.333){
    return .05*weight;
}

else if (age <.033 && age >=.166){
    return .1* weight;
}
}
console.log (pounds(1,15));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

/*let rock = 1 
let paper = 2
let scissors =3 */


 /*function game (player){  
    let computer= math.floor(math.random()*4)

      if (player === 1 && computer ===1){
       return "tie";
      }
      else if (player ===1 && computer ===2) {
        return " computer choose paper! comptuer wins ";
           }
      else if (player ===1 && computer ===3) {
            return "computer choose scissors! player wins ";
        }
        else if (player ===2 && computer ===1) {
                return "computer choose rock! player wins ";
        }
        else if (player ===2 && computer ===2) {
            return "tie";
        }
        else if (player ===2 && computer ===3) {
            return "computer choose scissor! computer wins ";
        }
        else if (player ===3 && computer ===1) {
            return "computer choose rock! computer wins ";
        }
        else if (player ===3 && computer ===2) {
            return "computer choose paper! player wins ";
        }
        else if (player ===3 && computer ===3) {
            return "tie";
    }
}
console.log (game (computer)); */

let computerChoice = Math.random();
if(computerChoice < 0.33){
computerChoice = "rock";
}else if(computerChoice >= 0.34 && computerChoice < 0.66){
 computerChoice = "paper";
}else if(computerChoice >= 0.66){
  computerChoice = "scissors";
}
console.log("Computer chooses " + computerChoice);

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let kilometers = prompt("Enter distance in kilometers: ")
let conversion = 0.621371
let miles = kilometers * conversion
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = prompt("Enter distance in feet: ")
let conversionrate = 30.48
let CM = feet * conversionrate
console.log(`${feet} feet is equal to ${CM} CM.`);




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`



    for(let i=99-1; i>0; i--) {
        let number =i
    }
    console.log (` ${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around (i) bottles of soda on the wall`); 


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
/*const grades = [ 90, 80, 70, 60]
for (let i=0; i < grades.length; i++) {
        Avgmarks += students[i][1];
        let avg = (Avgmarks/students.length);{}

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}
console.log((Avgmarks)/students.length);
}

function pounds(age, weight){

if (age>=1 && weight<=5){
        return .05*weight;
}
else if (age>=1 && weight>5 && weight<=10){
   return .04*weight;
}
else if (age>=1 && weight>11 && weight<=15){
    return .03*weight;
}
else if (age>=1 && wight>15) {
    return .02*weight;
}
else if (age<1 && age >= .583) {
    return .04 *weight;
}
else if (age <.583 && age >=.333){
    return .05*weight;
}

else if (age <.033 && age >=.166){
    return .1* weight;
}
}
console.log (pounds(1,15));



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
