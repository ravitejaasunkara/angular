import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttptestService {

  constructor(private http:HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com';

  fetchData(){
    return this.http.get(this.url+'/posts');
  }
  sendData(post: any){
    return this.http.post(this.url+'/posts',post);
  }

}
