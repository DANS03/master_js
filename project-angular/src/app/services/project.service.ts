import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Observable } from 'rxjs'; 
import { Project } from '../models/project';
import { Global } from './global';
import { identifierName } from '@angular/compiler';

@Injectable() export class ProjectService{
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    };

    testService(){
        return 'Testing angular service';
    };

    saveProject(project:Project):Observable<any>{
        var params= JSON.stringify(project);
        var headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url + "/saveProject",params,{headers:headers});
    };

    getProjects():Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url + '/allProjects', {headers:headers} );

    }


    getProject(id:number):Observable<any>{
        
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url + '/project/' + id , {headers:headers});
    };

    deleteProject(id:number):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.delete(this.url + '/projectDelete/' + id , {headers:headers});
    };

    updateProject(project:any):Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url + '/projectUpdate/' + project._id, params , {headers:headers});
    };

}