console.log('Welcome to data types');
//String
var stringVar = "I'm a string!";
//Number
var numberVar = 12;
//Boolean
var trueFalse = true;
//Any
var anything = "I'm anything!";
//Arrays
var languages = ['JS', 'Python', 'C', 'Java'];
var ages = [12, 15];
//Multiple data types
var numbersAndStrings = 1; //it could be ether a string or number
var mixed = "hello";
// Let vs Var
var number1 = 10;
var number2 = 20;
if (number1 == 10) {
    var number1_1 = 44; //let is not a globar variable, so is limited to the block of code that is in
    var number2 = 55;
}
console.log(number1, number2);
console.log(stringVar, numberVar, trueFalse, anything, languages, ages, numbersAndStrings);
