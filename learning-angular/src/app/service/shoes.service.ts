import { Injectable } from "@angular/core";
import { Shoe } from "../models/shoe";

@Injectable()
export class ShoeService{
    public shoes : Array<any>;
    
    constructor(){
        
        this.shoes = [
            new Shoe('Air One' , 100 , true , 'blue' , 'nike'),
            new Shoe('Air two' , 80 , true , 'blue' , 'adidas'),
            new Shoe('Air three' , 100 , true , 'blue' , 'vans'),
            new Shoe('Air four' , 60 , true , 'blue' , 'converse')

        ];
    }

    gettext(){
        return "Hello world from a service!";
    }



    getShoes(): Array<Shoe>{
        return this.shoes;
    }
}