import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturednewsComponent } from './featurednews.component';

describe('FeaturednewsComponent', () => {
  let component: FeaturednewsComponent;
  let fixture: ComponentFixture<FeaturednewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturednewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturednewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
