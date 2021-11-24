import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import{throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {retry} from "rxjs/operators";
import {Specialty} from "../Specialties/model/specialty";

@Injectable({
  providedIn:'root'
})
export class SpecialtyService {
  //basePath = 'http://localhost:3000/Specialties';
  //basePath = 'http://localhost:8105/api/v1/specialties';
  basePath = 'https://easyjobsbackend.herokuapp.com/api/v1/specialties';
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
  get_by_idPostulant(id:number){
    return this.http.get<any>(`${this.basePath}/postulant/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  AddSpecialty(id:number,item:any){
    return this.http.post<Specialty>(`${this.basePath}/postulant/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  EditSpecialty(id:number,data:any){
    return this.http.put<Specialty>(`${this.basePath}/${id}`,data,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  DeleteSpecialty(id:number){
    return this.http.delete<Specialty>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  Get_by_specialty_experience(search:string){
    return this.http.get<any>(`${this.basePath}/specialty/${search}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
