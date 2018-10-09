import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZomatoRestComponent } from './zomato-rest.component';

describe('ZomatoRestComponent', () => {
  let component: ZomatoRestComponent;
  let fixture: ComponentFixture<ZomatoRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZomatoRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZomatoRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
