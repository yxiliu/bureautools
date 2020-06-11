import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistadrbookComponent } from './existadrbook.component';

describe('ExistadrbookComponent', () => {
  let component: ExistadrbookComponent;
  let fixture: ComponentFixture<ExistadrbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistadrbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistadrbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
