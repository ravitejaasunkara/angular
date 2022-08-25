import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service:AppService){

  }
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.service.getData().subscribe(
      result => {
        console.log(result)
      },
      error => {
        console.log(error);
      }
    )
  }
}
