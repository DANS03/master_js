import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router , ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ProjectService]
})
export class DetailsComponent implements OnInit {
  
  public url: string;
  public project: any;

  constructor(
    private _projectService: ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {

    this.url = Global.url;
    this.project = '';

   }

  ngOnInit(): void {

    this._route.params.subscribe( params => {
      let id= params['id'];

      this.getProject(id);
    } );

  }

  getProject(id:number){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project
        console.log(this.project);
      },
      error => {
        console.log(<any>error);
      }
    )
  };

}
