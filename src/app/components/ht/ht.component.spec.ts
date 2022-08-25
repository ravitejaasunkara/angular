import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HtService } from 'src/app/services/ht/ht.service';

import { HtComponent } from './ht.component';

xdescribe('HtComponent', () => {
  let component: HtComponent;
  let fixture: ComponentFixture<HtComponent>;
  let mockHtService: any;

  beforeEach(async () => {
    mockHtService = jasmine.createSpyObj('HtService',['fetchComments']);
    await TestBed.configureTestingModule({
      declarations:[HtComponent],
      providers:[
        {provide: HtService, useValue: mockHtService}  
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getComments(component) ', () => {
    let sampleComments = [{"postId":1,"id":1,"name":"id labore ex et quam laborum","email":"Eliseo@gardner.biz","body":"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"}];
    let spySampleComments = mockHtService.fetchComments.and.returnValue(of(sampleComments));
    //component.getComments(); //if the function() is not in ngOnInit
    fixture.detectChanges(); //if the function() is being called in ngOnInit, we can use either anything.
    expect(spySampleComments).toHaveBeenCalled();
    expect(component.comments.length).toBe(1);
  })
});
