import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [ RequestService ]
})
export class ExternalComponent implements OnInit {

  constructor(
    private _requestService : RequestService
    ) {
      console.log('hi');
   }

  ngOnInit(): void {
    this._requestService.getUser().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
