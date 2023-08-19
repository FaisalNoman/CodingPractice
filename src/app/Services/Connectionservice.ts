import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { HtmlTagDefinition } from '@angular/compiler';
import { environment } from 'src/Environments/environment';
import { Router } from '@angular/router';
import { LoginComponent } from '../Components/Login/login/login.component';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
  })
  export class ConnectionService {

    constructor(private http: HttpClient,
      private router: Router) { }
      
      postData<T>(relativeUrl: string, data: any, apiUri = environment.apiUrl): Observable<T>{
        return this.http
          .post<T>(`${apiUri}/${relativeUrl}`, data)
          .pipe(
            retry(0),
            catchError(this.handleError)
          );
      }

      getUserData(relativeUrl: string, apiUri = environment.apiUrl): Observable<any> {
      
      let auth_token = localStorage.getItem('myData')
      debugger
      // const headers = new HttpHeaders({
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${auth_token}`
      //   });
        let params : any = {
          responseType: 'text',
          headers: new Headers({
              "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IldhamVlaGFAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwianRpIjoiMTcyOWJlMTEtMzFjZC00ZDAzLTk1NzQtZDA2YTQzOGYzNzgzIiwibmJmIjoxNjkyMjY5MDIxLCJleHAiOjE2OTI4NzM4MjEsImlhdCI6MTY5MjI2OTAyMSwiaXNzIjoiSldUQXV0aGVudGljYXRpb25TZXJ2ZXIiLCJhdWQiOiJKV1RTZXJ2aWNlUG9zdG1hbkNsaWVudCJ9.ZPy0F3ek1imkV036zV4dTVs6aCjungg3BjcFSoS0zP4',
              "Content-Type": "application/json"
          })
      }
        debugger
        const requestOptions = { params }
        //return this.http.get<any>('https://localhost:7178/api/User/GetAllRecords',requestOptions)
        //debugger
        return this.http.get<any>('https://localhost:7178/api/User/GetAllRecords',params)
            .pipe(
              retry(1),
              catchError(this.handleError2<any>())
            )
      }
      
      getAdminData(relativeUrl: string, apiUri = environment.apiUrl): Observable<any> {
        debugger;
      //const token = localStorage.getItem('myData');
      
      // let headers = new Headers();
      let header = new HttpHeaders().set(
        "Authorization",
        `localStorage.getItem('myData')`
      );
        
        return this.http
            .get('https://localhost:7178/api/Admin/GetAllRecords',{headers:header} )
            // .pipe(
            //   retry(1),
            //   catchError(this.handleError2<any>())
            // )
      }
      handleError(error: any,data: any) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else if (error.status === 401) {
            errorMessage = 'Incorrect Username or Password';
          } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => new Error (errorMessage));
      }
      private handleError2<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
      }
    }