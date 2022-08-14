import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  
  public title : string;
  public subtitle : string;
  public git : string;

  constructor() {

    this.title = "David A. Naranjo";
    this.subtitle = "University student intrested in learning and working";
    this.git = "https://github.com/DANS03" ;
    


   }
  
  ngOnInit(): void {
  }

}
