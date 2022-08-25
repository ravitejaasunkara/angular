import { TestBed } from '@angular/core/testing';

import { HttptestService } from './httptest.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

xdescribe('HttptestService', () => {
  let service: HttptestService;
  let httpTestControl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HttptestService]
    });
    service = TestBed.inject(HttptestService);
    httpTestControl = TestBed.inject(HttpTestingController);
  });

  afterEach(()=> {
    httpTestControl.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Should get data',() => {
    let sampleResponse = [{
      "userId": 1,
      "id": 1,
      "title": "sunt",
      "body": "autem sunt rem eveniet architecto"}]
    service.fetchData().subscribe(result => {expect(result).toEqual(sampleResponse)})
    const req = httpTestControl.expectOne(service.url+'/posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toBe('json');
    req.flush(sampleResponse);
  })
  it('Should Post data',() =>{
    let sampleResponse = [{"userId":1,"id":1,"title":"hello","body":"world"}];
    service.sendData(sampleResponse).subscribe(result => {
      expect(result).toEqual(sampleResponse);
    })
    const req = httpTestControl.expectOne(service.url+'/posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toBe('json');
    req.flush(sampleResponse);
  })
});
