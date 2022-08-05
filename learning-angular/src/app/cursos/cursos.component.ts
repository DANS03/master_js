import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  public name: string;
  constructor(
    
    private _route: ActivatedRoute,
    private _router:Router
  ) {
    this.name='';
   }

  ngOnInit(): void {
    
    this._route.params.subscribe( (params: Params)=>{
      this.name= params['name'];
      console.log(this.name);
      
    })
  }

  redirect(){
    this._router.navigate(['/shoe'])
  };

}
