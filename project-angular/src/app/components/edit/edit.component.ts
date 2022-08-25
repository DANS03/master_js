import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.services';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, UploadService]
})
export class EditComponent implements OnInit {

 
  public title: string;
  public project:any;
  public status: string;
  public filesToUpload : Array<File>;
  public url = '';
  public saved_project:any;

  constructor(
    private _projectService : ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router

  ) { 
    this.title ='Edit Project';
    this.project ='' //new Project('','','','',2022,'','');
    this.status = '';
    this.filesToUpload = [];
    this.url = Global.url;

  }

  ngOnInit(): void {

    this._route.params.subscribe( params => {
      let id= params['id'];

      this.getProject(id);
    } );
  };

  getProject(id:number){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project

      },
      error => {
        console.log(<any>error);
      }
    )
  };

  onSubmit( form:any ){

    //save data

    this._projectService.updateProject(this.project).subscribe(
      response => {

        if(response.project){
          this.status = 'success';

          if(this.filesToUpload.length >= 1){
            
          this._uploadService.makeFileRequest(this.url + '/uploadImage/' + response.project._id , [] , this.filesToUpload , 'image' ).then((result:any)=>{

            this.saved_project = result.project;
          });

          }else{
            this.saved_project = response.project;
          this.status = 'success';

          }

          
        }else {
          this.status = 'failed';
        }

      },
      error => { 
        console.log(error);
      }
    );
}

fileChangeEvent( fileInput : any ){
  console.log(fileInput);
  this.filesToUpload = <Array<File>>fileInput.target.files;
}


}
