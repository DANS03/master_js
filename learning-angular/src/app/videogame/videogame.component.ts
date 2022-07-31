import { Component, OnInit,DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector:'videogame',
    /*template:  <h2>Videogame Component</h2>
        <ul>
        <li>Breath of the Wild</li>
        <li>Arkaham Asylum</li>
        <li>Mario Kart</li>
        <li>Broforce</li>
    
    </ul> ----> this cna be also done by creating an external docuemnt*/
    templateUrl: './Videogame.component.html' 
})

export class VideogameComponent implements OnInit ,DoCheck,OnDestroy{
    public title: string;
    public list : string;
    

    constructor(){

        this.title = "Videogame Component";
        this.list = "Videogame List";
        console.log("Videogame component loaded succesfully");
    }

    ngOnInit(){
        console.log('OnInit loaded');
    }
    ngDoCheck(){
        console.log('DoCheck executed');
    }
    changeTitle(){
        this.title = "New title"
    }

    ngOnDestroy(): void {
        console.log('OnDestroy executed');
    }

 

}