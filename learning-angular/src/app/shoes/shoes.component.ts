import { Component , OnInit} from "@angular/core";
import { Shoe } from "../models/shoe"

@Component({
    selector: 'shoe',
    templateUrl: './shoes.component.html'
})
export class ShoesComponent implements OnInit{
    public title :string = "Shoe Component";
    public shoes : Array<Shoe>;

    constructor(){
        this.shoes = [
            new Shoe('Air One' , 100 , true , 'blue' , 'nike'),
            new Shoe('Air two' , 100 , true , 'blue' , 'adidas'),
            new Shoe('Air three' , 100 , true , 'blue' , 'vans'),
            new Shoe('Air four' , 100 , true , 'blue' , 'converse')

        ];
    }
    ngOnInit(): void {
        console.log(this.shoes);
    }
}