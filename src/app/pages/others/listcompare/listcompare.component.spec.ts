import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcompareComponent } from './listcompare.component';

describe('ListcompareComponent', () => {
  let component: ListcompareComponent;
  let fixture: ComponentFixture<ListcompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
