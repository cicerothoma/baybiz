import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBizComponent } from './add-biz.component';

describe('AddBizComponent', () => {
  let component: AddBizComponent;
  let fixture: ComponentFixture<AddBizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
