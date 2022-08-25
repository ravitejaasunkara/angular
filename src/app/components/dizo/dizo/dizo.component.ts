import { Component, OnInit } from '@angular/core';
import { DizoService } from 'src/app/services/dizo.service';

@Component({
  selector: 'app-dizo',
  templateUrl: './dizo.component.html',
  styleUrls: ['./dizo.component.css']
})
export class DizoComponent implements OnInit {

  constructor(private dizoService: DizoService) { }

  ngOnInit(): void {
    this.getCoffeeList();
  }
  coffeeList:any;

  getCoffeeList(){
    this.dizoService.getData().subscribe(
      result => {
        this.coffeeList = result
      }
    )
  }

}
