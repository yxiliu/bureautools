import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BureaueditComponent } from './bureauedit.component';

describe('BureaueditComponent', () => {
  let component: BureaueditComponent;
  let fixture: ComponentFixture<BureaueditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BureaueditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BureaueditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
