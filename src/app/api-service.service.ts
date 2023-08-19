import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from './Models/Login.Model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  // private apiUrl = 'https://localhost:7178/api/Login';

  // constructor(private http: HttpClient) { }

  // OnSubmit(loginData: any): Observable<Login[]> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //   return this.http.get<Login[]>(this.apiUrl, { headers, params: loginData });

  readonly apiUrl = 'https://localhost:7178/api/Login/Login';

  constructor(private http: HttpClient) { }

  loggedInUsername: string = '';
  
  OnSubmit(Login: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Login/Login', Login, httpOptions);
  }

  setLoggedInUsername(username: string) {
    this.loggedInUsername = username;
  }
}
