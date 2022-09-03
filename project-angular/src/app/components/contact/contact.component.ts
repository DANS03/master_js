import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public sliderWidth:any; 
  public width:any;

  constructor() { 
    this.sliderWidth = null;
    this.width = null;
  }

  ngOnInit(): void {

    $("#logo").click(function(e: any){
      e.preventDefault();
      $("header").css("background","green")
                  .css("height","150px");
    });

  }


  loadSlider(){
    console.log("enter")
    this.width= this.sliderWidth
  }

}
