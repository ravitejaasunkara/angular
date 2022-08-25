import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  text = '';
  ngOnInit(): void {
    if(localStorage.getItem('isLogin')=='true'){
      this.text = 'Logout';
    }
  }

}
