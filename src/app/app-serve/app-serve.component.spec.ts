import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServeComponent } from './app-serve.component';

describe('AppServeComponent', () => {
  let component: AppServeComponent;
  let fixture: ComponentFixture<AppServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
