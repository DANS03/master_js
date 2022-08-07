import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'calculator'
})
export class CalculatorPipe implements PipeTransform{
    //this first param is the data and the second is calculator: second param
    transform(value : any, secondValue : any) {
        let operations = `
        sum:${value + secondValue} - 
        susctraction:${value - secondValue}  -
        multiplication:${value * secondValue}  -
        divition:${value / secondValue}  -
        
        
        `;

        return operations;
  }  
}