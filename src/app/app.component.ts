import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private datePipe:DatePipe){}
  title = 'a1';
  mydate:string='2015-04-04T14:45:27.863+00:00';
  ngOnInit(){
    //console.log(this.datePipe.transform('','long')?.slice(0,-2));
  }
}
