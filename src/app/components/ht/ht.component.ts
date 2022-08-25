import { Component, OnInit } from '@angular/core';
import { HtService } from 'src/app/services/ht/ht.service';

@Component({
  selector: 'app-ht',
  templateUrl: './ht.component.html',
  styleUrls: ['./ht.component.css']
})
export class HtComponent implements OnInit {

  constructor(private htService: HtService) { }

  ngOnInit(): void {
    this.getComments();
  }
  comments:any;
  getComments(){
    this.htService.fetchComments().subscribe(
      result => {
        this.comments = result;
      }
    )
  }

}
