import { Component } from '@angular/core';

import { config  } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
  public showVideogames : boolean = true;
  public color = config.background;

  constructor(){
    this.title = config.title;
    
  }

  hideVideogames(){
    this.showVideogames=false;
}
}
