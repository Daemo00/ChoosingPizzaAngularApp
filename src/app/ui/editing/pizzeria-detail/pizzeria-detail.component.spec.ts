import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaDetailComponent } from './pizzeria-detail.component';

describe('PizzeriaDetailComponent', () => {
  let component: PizzeriaDetailComponent;
  let fixture: ComponentFixture<PizzeriaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzeriaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzeriaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
