import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaItemComponent } from './pizzeria-item.component';

describe('PizzeriaItemComponent', () => {
  let component: PizzeriaItemComponent;
  let fixture: ComponentFixture<PizzeriaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzeriaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzeriaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
