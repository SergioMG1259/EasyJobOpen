import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {Notification} from "../Notifications/model/notification";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class NotificationServices {
  //basePath = 'http://localhost:3000/Notifications';
  //basePath = 'http://localhost:8105/api/v1/notifications'
  basePath = 'https://easyjobsbackend.herokuapp.com/api/v1/notifications';
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
  get_by_company(idown:number){
    return this.http.get<any>(`${this.basePath}/company/${idown}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  get_by_postulants(idown:number){
    return this.http.get<any>(`${this.basePath}/postulant/${idown}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  edit_notification(id:number,data:any){
    return this.http.patch<Notification>(`${this.basePath}/${id}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  add_notification(companyId:number,announcementId:number,postulantId:number,item:any){
    return this.http.post<Notification>(`${this.basePath}/company/${companyId}/announcement/${announcementId}/postulant/${postulantId}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  delete_notification(id:number){
    return this.http.delete<Notification>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
