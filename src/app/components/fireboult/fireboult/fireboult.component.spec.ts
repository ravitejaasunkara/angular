import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireboultComponent } from './fireboult.component';

describe('FireboultComponent', () => {
  let component: FireboultComponent;
  let fixture: ComponentFixture<FireboultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireboultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireboultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
