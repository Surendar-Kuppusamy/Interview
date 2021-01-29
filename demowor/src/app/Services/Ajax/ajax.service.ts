import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { pipe, throwError, Subject, Observable } from 'rxjs';
import { catchError } from "rxjs/operators";


export interface Response {
  status: string,
  message: string,
  data?: any
}


@Injectable({
  providedIn: 'root'
})

export class AjaxService {

  constructor(public http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      alert('Client Side Error:'+error.error.message);
    } else {
      alert('Server Side Error:'+error.error);
    }
    return throwError('Something went wrong.');
  }

  

  post(url, data): Observable<Response> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Response>(url, data, {headers: headers}).pipe(
      catchError(this.handleError)
    );
  }

}
