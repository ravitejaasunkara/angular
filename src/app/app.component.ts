// app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http-spinner-loader';

  constructor(private http: HttpClient) {}

  getIMDBData() {
    return this.http
    .get<any>('http://www.omdbapi.com/?apikey=YOUR_OMDB_KEY&s=car')
    .subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Error Found!');
    });
  }
}