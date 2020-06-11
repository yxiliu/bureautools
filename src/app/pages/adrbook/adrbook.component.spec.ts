import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrbookComponent } from './adrbook.component';

describe('AdrbookComponent', () => {
  let component: AdrbookComponent;
  let fixture: ComponentFixture<AdrbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdrbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
