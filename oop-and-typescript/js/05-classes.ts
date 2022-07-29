console.log('Welcome to class in  OOP');

//Interface: --> An interface is a set of methods and properties that MUST exists in a class
interface ClassesTemplate{
    setCoder(coder);
    getCoder();
}

//if you want to create a instance of your class in another file then you got to export it


//CLASS: -->A class is the mould of an object 
class Classes implements ClassesTemplate{//The name of the class ussually has the same name of the doc

    //Properties: -->A class has properties which are caracteristics of an object
    public creator: string;
    public description : string;
    public creationDate: number;
    private coder : string; //whe an atribute is private is only accessible by the classes that inherits them 
    
    

    
    //Methods: -->These are the actions thata the object will make
    public setCoder(coder){
        this.coder = coder;
    } 

    public getCoder(){
        return this.coder;
    }


    //Constructor: A constructor is a methos that set the properties to a default value when the class is created -!the consturctor never returs anything

    constructor(){
        this.coder = "DANS";
        this.creator ="DANS";
        this.creationDate = 2022;
        this.description = "This is a class"; 

    }

}
// Inheritance : this is use when we want to createa new class that has the methods and properties of another and alo has more of it's own

class Inherited extends Classes {
    private newPropertie : string; 

    setNewProperties(propertie : string){
        this.newPropertie = propertie;
    }

    getPropertie(){
        return this.newPropertie;
    }
    
}



var newClass = new Classes();

//if the values are public you can easily change them without a method 

newClass.creator = "David";
newClass.description= "A basic class created to ilutrate how classes work";

newClass.setCoder('David');

console.log(newClass);
 
console.log(newClass.getCoder() + ' -->Coded by');



