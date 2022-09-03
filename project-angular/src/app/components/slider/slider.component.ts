import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() width:any

  constructor() {
    this.width=null;
   }

  ngOnInit(): void {
    console.log(this.width);
    (<any>$(".bxslider")).bxSlider({
      mode:'fade',
      captions:true,
      slideWidth:this.width,
      slideWidthMax:this.width,
    });

    
  }

}
