import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {Company} from "../Company/model/company";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";
import {Postulant} from "../Postulant/model/postulant";

@Injectable({
  providedIn:'root'
})
export class CompanyServices{
  //basePath = 'http://localhost:3000/Companies';
  //basePath = 'http://localhost:8105/api/v1/companies';
  basePath = 'https://easyjobsbackend.herokuapp.com/api/v1/companies';
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
  get_company_by_id(id:number){
    return this.http.get<any>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  edit_company(id:number,data:any){
    return this.http.put<Company>(`${this.basePath}/${id}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  signIn(data:any){
    return this.http.post<Company>(`${this.basePath}/auth/sign-in`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  register(data:any){
    return this.http.post<Company>(`${this.basePath}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
