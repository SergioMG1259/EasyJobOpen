import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {Project} from "../Project/model/project";
import {SaveProject} from "../Project/model/saveProject";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class ProjectsServices {
  //basePath = 'http://localhost:3000/Projects';
  //basePath = 'http://localhost:8105/api/v1/projects';
  basePath = 'https://easyjobsbackend.herokuapp.com/api/v1/projects';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError('Something happened with request, please try again later');
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  getById(id:number){
    // return this.http.get<any>(`${this.basePath}/?id=${id}`, this.httpOptions)api/v1/
    return this.http.get<any>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  getByOwner(idown:number){
    return this.http.get<any>(`${this.basePath}/postulant/${idown}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  setproyect(id:number,data:any){
    return this.http.put<Project>(`${this.basePath}/${id}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  AddProject(idown:number,item:any){
    return this.http.post<Project>(`${this.basePath}/postulant/${idown}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  DeleteProject(id:number){
    return this.http.delete<Project>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
