var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Welcome to class in  OOP');
//if you want to create a instance of your class in another file then you got to export it
//CLASS: -->A class is the mould of an object 
var Classes = /** @class */ (function () {
    //Constructor: A constructor is a methos that set the properties to a default value when the class is created -!the consturctor never returs anything
    function Classes() {
        this.coder = "DANS";
        this.creator = "DANS";
        this.creationDate = 2022;
        this.description = "This is a class";
    }
    //Methods: -->These are the actions thata the object will make
    Classes.prototype.setCoder = function (coder) {
        this.coder = coder;
    };
    Classes.prototype.getCoder = function () {
        return this.coder;
    };
    return Classes;
}());
// Inheritance : this is use when we want to createa new class that has the methods and properties of another and alo has more of it's own
var Inherited = /** @class */ (function (_super) {
    __extends(Inherited, _super);
    function Inherited() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inherited.prototype.setNewProperties = function (propertie) {
        this.newPropertie = propertie;
    };
    Inherited.prototype.getPropertie = function () {
        return this.newPropertie;
    };
    return Inherited;
}(Classes));
var newClass = new Classes();
//if the values are public you can easily change them without a method 
newClass.creator = "David";
newClass.description = "A basic class created to ilutrate how classes work";
newClass.setCoder('David');
console.log(newClass);
console.log(newClass.getCoder() + ' -->Coded by');
