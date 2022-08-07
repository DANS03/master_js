import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [ RequestService ]
})
export class ExternalComponent implements OnInit {

  public user: any;
  public userId: number ;
  public date: any;

  constructor(
    private _requestService : RequestService
    ) {
      this.userId = 1 ;
   }

  ngOnInit(){
    this.loadUser();
    this.date= new Date (2022,6,8) ; // that how you hard code a date
  }

  loadUser(){
    this.user= false;
    this._requestService.getUser(this.userId).subscribe( 
      result => {
        console.log(result);
        this.user= result;
        
      },
      error => {
        console.log(<any>error);
      }
    );
    
  }

}
