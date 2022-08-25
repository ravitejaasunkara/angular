import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtService {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com';


  fetchComments(){
    return this.http.get(this.url+'/comments');
  }
}
