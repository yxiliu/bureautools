import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterdupremoverpComponent } from './counterdupremoverp.component';

describe('CounterdupremoverpComponent', () => {
  let component: CounterdupremoverpComponent;
  let fixture: ComponentFixture<CounterdupremoverpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterdupremoverpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterdupremoverpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
