import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {Announcement} from "../Announcement/model/announcement";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";
import {Project} from "../Project/model/project";

@Injectable({
  providedIn:'root'
})
export class AnnouncementServices{
  basePath = 'http://localhost:3000/Announcements';
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
  get_announcement_by_id(id:number){
    return this.http.get<any>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  edit_announcement(id:number,data:any){
    return this.http.patch<Announcement>(`${this.basePath}/${id}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  add_announcement(item:Announcement){
    return this.http.post<Announcement>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  get_announcement_by_company(id:number){
    return this.http.get<any>(`${this.basePath}?id_company=${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  DeleteAnnouncement(id:number){
    return this.http.delete<Project>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  get_announcements_not_practicing() {
    return this.http.get<Announcement[]>(`${this.basePath}?required_experience_ne=Practicante&visible=true`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  get_announcements_practicing() {
    return this.http.get<Announcement[]>(`${this.basePath}?required_experience=Practicante&visible=true`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
