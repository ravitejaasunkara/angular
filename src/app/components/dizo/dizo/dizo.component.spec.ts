import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DizoService } from "src/app/services/dizo.service";
import { DizoComponent } from "./dizo.component";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from "rxjs";

describe('DizoComponent', () =>  {

  let component:DizoComponent;
  let fixture: ComponentFixture<DizoComponent>;
  let mockService: any;
  beforeEach(() => {
    mockService = jasmine.createSpyObj('DizoService',['getData']);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations:[DizoComponent],
      providers:[
        {provide:DizoService,useValue:mockService}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(DizoComponent);
    component = fixture.componentInstance;
  })
  it('should get data when getData() is called', () => {
    let mockCoffeList = [{"price":"$16.99","name":"Founders All Day IPA","rating":{"average":4.411243509154233,"reviews":453},"image":"https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png","id":1},{"price":"$16.99","name":"Founders All Day IPA","rating":{"average":4.411243509154233,"reviews":453},"image":"https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png","id":1},{"price":"$16.99","name":"Founders All Day IPA","rating":{"average":4.411243509154233,"reviews":453},"image":"https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png","id":1}];
    let spyMockCoffeeList = mockService.getData.and.returnValue(of(mockCoffeList));
    component.getCoffeeList();
    expect(spyMockCoffeeList).toHaveBeenCalled();
    expect(component.coffeeList.length).toBe(3);
  })
})