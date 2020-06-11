import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauComponent } from './bureau.component';

describe('BureauComponent', () => {
  let component: BureauComponent;
  let fixture: ComponentFixture<BureauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BureauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
