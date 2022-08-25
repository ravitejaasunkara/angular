import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DizoService {

  constructor(private http: HttpClient) { }
  dataUrl = 'https://api.sampleapis.com/beers/ale';
  getData(){
    return this.http.get(this.dataUrl);
  }
}
