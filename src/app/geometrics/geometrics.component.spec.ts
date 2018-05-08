import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometricsComponent } from './geometrics.component';

describe('GeometricsComponent', () => {
  let component: GeometricsComponent;
  let fixture: ComponentFixture<GeometricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
