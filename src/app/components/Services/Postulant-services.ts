import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {Postulant} from "../Postulant/model/postulant";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class PostulantServices {
  //basePath = 'http://localhost:3000/Postulants';
  //basePath = 'http://localhost:8105/api/v1/postulants';
  basePath = 'https://easyjobsbackend.herokuapp.com/api/v1/postulants';
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

  getAll(){
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
  editProfile(id:number,data:any){
    return this.http.put<Postulant>(`${this.basePath}/${id}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  signIn(data:any){
    return this.http.post<Postulant>(`${this.basePath}/auth/sign-in`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  register(data:any){
    return this.http.post<Postulant>(`${this.basePath}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
