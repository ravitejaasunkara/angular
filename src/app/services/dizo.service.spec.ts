import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing";
import { DizoService } from "./dizo.service";

describe('DizoService', () => {
  let httpTestController: HttpTestingController;
  let dizoService: DizoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
    httpTestController = TestBed.inject(HttpTestingController);
    dizoService = TestBed.inject(DizoService);
  })
  afterEach(()=>{
    httpTestController.verify();
  })
  it('should test getData',() => {
    let mockCoffeList = [{"price":"$16.99","name":"Founders All Day IPA","rating":{"average":4.411243509154233,"reviews":453},"image":"https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png","id":1},{"price":"$16.99","name":"Founders All Day IPA","rating":{"average":4.411243509154233,"reviews":453},"image":"https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png","id":1},{"price":"$16.99","name":"Founders All Day IPA","rating":{"average":4.411243509154233,"reviews":453},"image":"https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png","id":1}];
    dizoService.getData().subscribe(result => {
      expect(result).toBe(mockCoffeList);
    })
    const req = httpTestController.expectOne(dizoService.dataUrl);
    expect(req.request.method).toEqual('GET');
    expect(req.request.responseType).toBe('json');
    req.flush(mockCoffeList);
  })

})