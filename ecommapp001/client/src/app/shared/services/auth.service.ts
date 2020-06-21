import { Injectable } from '@angular/core';
import { User } from './../interfaces/user.interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint = 'http://localhost:4000/authapi';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) { }

  // Sign-up
  signUp(user: User): Observable<any> {
    return this.http.post(`${this.endpoint}/registeruser`, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  setToken(token) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    const removeToken = localStorage.removeItem('access_token');
    // if (removeToken == null) {
    //   this.router.navigate(['log-in']);
    // }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    return this.http.get(`${this.endpoint}/userprofile/${id}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}