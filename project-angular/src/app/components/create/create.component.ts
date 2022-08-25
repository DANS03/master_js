import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.services';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload : Array<File>;
  public url = '';
  public saved_project:any;

  constructor(
    private _projectsService : ProjectService,
    private _uploadService: UploadService

  ) { 
    this.title ='Create a Project';
    this.project = new Project('','','','',2022,'','');
    this.status = '';
    this.filesToUpload = [];
    this.url = Global.url;

  }

  ngOnInit(): void {
  }

  onSubmit( form:any ){

      //save data

      this._projectsService.saveProject(this.project).subscribe(
        response => {

          if(response.project){
            this.status = 'success';
            
            //save Img
            this._uploadService.makeFileRequest(this.url + '/uploadImage/' + response.project._id , [] , this.filesToUpload , 'image' ).then((result:any)=>{

              this.saved_project = result.project;

            });

            form.reset();
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
    
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
