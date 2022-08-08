import { formatCurrency } from '@angular/common';
import { HttpBackend, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  public newUser: any;
  public savedUser: any;

  constructor(
    private _requestService : RequestService
    ) {
      this.savedUser= ""
      this.userId = 1 ;
      this.newUser = {
        "name": "",
        "job": "",
      }
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

  onSubmit(form :any){
    this._requestService.addUser(this.newUser).subscribe(
      response => {
        console.log(response);
        
        this.savedUser = response;
        console.log(this.savedUser);

        form.reset();
        

      },
      error =>{
        console.log(<any> error);
      }
    );
  }

}
