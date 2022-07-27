console.log('Welcome to data types');

//String
let stringVar: string = "I'm a string!"

//Number
let numberVar:number = 12;

//Boolean
let trueFalse: boolean = true;

//Any
let anything : any = "I'm anything!"

//Arrays
var languages : Array<string> =['JS','Python', 'C','Java'];

let ages : number[] = [12,15]


//Multiple data types
var numbersAndStrings : number | string = 1; //it could be ether a string or number

//Or i cans create akas 
type stringAndNumbers = string | number;

var mixed : stringAndNumbers = "hello";

// Let vs Var

var number1 = 10;
var number2 = 20; 

if(number1 == 10){
    let  number1 = 44; //let is not a globar variable, so is limited to the block of code that is in
    var number2 = 55;
}

console.log(number1 ,number2);



console.log(stringVar,numberVar,trueFalse,anything,languages,ages,numbersAndStrings);