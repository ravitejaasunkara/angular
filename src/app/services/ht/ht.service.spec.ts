import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HtService } from "./ht.service"

describe('HtService',() => {

  let htService: HtService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HtService]
    })
    htService = TestBed.inject(HtService);
    httpTestingController = TestBed.inject(HttpTestingController);
  })
  afterEach(() => {
    httpTestingController.verify();
  })
  it('Should call getComments()', ()=> {
    let sampleComments = [{"postId":1,"id":1,"name":"id labore ex et quam laborum","email":"Eliseo@gardner.biz","body":"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"}];
    htService.fetchComments().subscribe(result => {
      expect(result).toBe(sampleComments);
    })
    var reqUrl = htService.url+'/comments';
    const req = httpTestingController.expectOne(reqUrl);
    expect(req.request.responseType).toBe('json');;
    expect(req.request.method).toBe('GET');
    req.flush(sampleComments);
  })
})