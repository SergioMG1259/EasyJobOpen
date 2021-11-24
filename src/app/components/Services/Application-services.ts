import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";
import {Project} from "../Project/model/project";
import {Application} from "../ApplicationProcess/model/application";
@Injectable({
  providedIn:'root'
})
export class ApplicationServices{
  //basePath = 'http://localhost:3000/Applications';
  //basePath = 'http://localhost:8105/api/v1/applications'
  basePath = 'https://easyjobsbackend.herokuapp.com/api/v1/applications';
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
  get_application_by_id(id:number){
    return this.http.get<any>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  edit_announcement(id:number,data:any){
    return this.http.put<Application>(`${this.basePath}/${id}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  add_application(announcementId:number,postulantId:number,item:any){
    return this.http.post<Application>(`${this.basePath}/announcement/${announcementId}/postulant/${postulantId}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  get_applications_by_announcement(id:number){
    return this.http.get<any>(`${this.basePath}/announcement/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  get_postulants_in_announcement(id:number){
    return this.http.get<any>(`${this.basePath}/postulant/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  get_application_by_announcement_postulant(ida:number,idp:number){
    return this.http.get<any>(`${this.basePath}/announcement/${ida}/postulant/${idp}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  deleteApplication(id:number){
    return this.http.delete<Application>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
