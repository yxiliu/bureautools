import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlemanagerComponent } from './articlemanager.component';

describe('ArticlemanagerComponent', () => {
  let component: ArticlemanagerComponent;
  let fixture: ComponentFixture<ArticlemanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlemanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
