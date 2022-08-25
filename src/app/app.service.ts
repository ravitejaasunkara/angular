import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || 'some error occured');
  }
}
