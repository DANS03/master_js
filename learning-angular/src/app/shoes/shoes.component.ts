import { Component , OnInit} from "@angular/core";
import { Shoe } from "../models/shoe"
import { ShoeService } from "../service/shoes.service";

@Component({
    selector: 'shoe',
    templateUrl: './shoes.component.html',
    providers: [ShoeService]
    
})
export class ShoesComponent implements OnInit{
    public title :string = "Shoe Component";
    public shoes : Array<Shoe>;
    public color : string; 
    public myBrand :string; 

    constructor(        
        private _shoeService : ShoeService
    ){
        this.color = 'blue';
        this.myBrand = "";
        this.shoes = [];
        /*this.shoes = [
            new Shoe('Air One' , 100 , true , 'blue' , 'nike'),
            new Shoe('Air two' , 80 , true , 'blue' , 'adidas'),
            new Shoe('Air three' , 100 , true , 'blue' , 'vans'),
            new Shoe('Air four' , 60 , true , 'blue' , 'converse')

        ];*/
    }
    ngOnInit(): void {
        console.log(this.shoes);
        this.shoes = this._shoeService.getShoes();
    }

    getBrand(){
        alert(this.myBrand);
    }

    changeColor(){
        this.color = this.color;
    }

    onBlur(){
        console.log("you are out of the input");
    }

    onEnter(){
        console.log('You pressed enter!');
        alert(this.myBrand);
    }
}