import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service:AppService){}
  posts!:any;
  ngOnInit(): void {
    this.posts = [];
    this.printDat();
  }
  printDat(){
    var data = this.getPosts();
    setTimeout(() => {
      console.log(data)
    }, 3000);
  }

  getPosts(){
    var items:Array<Data> = new Array<Data>();
    this.service.getData().subscribe(
      data => {
       var postsdata = data;
       postsdata.forEach(item => {
        let d = new Data();
        d.id = item.id;
        d.userId = item.userId;
        d.title = item.title;
        d.body = item.body;
        items.push(d)
       })
      });
      return items;
  }
}
