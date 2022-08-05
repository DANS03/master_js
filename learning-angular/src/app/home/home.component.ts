import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public identify : boolean;
  constructor() {
    this.identify= false;
   }

  ngOnInit(): void {

  }

  authentificate(){
    this.identify = !this.identify;
  }

}
