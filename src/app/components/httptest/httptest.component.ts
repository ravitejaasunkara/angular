import { Component, OnInit } from '@angular/core';
import { HttptestService } from 'src/app/services/samplehttp/httptest.service';

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.css']
})
export class HttptestComponent implements OnInit {

  constructor(private httpService: HttptestService) { }

  ngOnInit(): void {
    this.getData();
    this.postData();
  }
  data:any = [];
  post: any = {"userId":1,"id":1,"title":"hello","body":"world"};

  getData(){
    this.httpService.fetchData().subscribe((result) => {
      //console.log(result);
    })
  }
  postData(){
    this.httpService.sendData(this.post).subscribe(
      result => {
        //console.log(result);
        this.data = result;
      }
    )
  }
  

}
