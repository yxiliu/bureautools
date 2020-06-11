import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BureashowComponent } from './bureashow.component';

describe('BureashowComponent', () => {
  let component: BureashowComponent;
  let fixture: ComponentFixture<BureashowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BureashowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BureashowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
