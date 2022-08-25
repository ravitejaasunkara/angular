import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttptestService } from 'src/app/services/samplehttp/httptest.service';

import { HttptestComponent } from './httptest.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('HttptestComponent', () => {
  let component: HttptestComponent;
  let fixture: ComponentFixture<HttptestComponent>;
  let service: HttptestService;
  let spyHttpservice = jasmine.createSpyObj('HttptestService',['fetchData','sendData']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ HttptestComponent ],
      providers:[HttptestService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttptestComponent);
    component = fixture.componentInstance;
    //service = TestBed.inject(HttptestService);
    //fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getData()',() => {
    let sampleGetData = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}];
    let spySampleData = spyHttpservice.fetchData.and.returnValue(of(sampleGetData));
    component.getData();
    expect(spySampleData).toHaveBeenCalled();
  })
});
