import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {Evidence} from "../Evidence/model/evidence";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";
@Injectable({
  providedIn:'root'
})
export class GithubServices {
  basePath='https://api.github.com';
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
  Get_repositories_by_username(name:string){
    return this.http.get<any>(`${this.basePath}/users/${name}/repos`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
