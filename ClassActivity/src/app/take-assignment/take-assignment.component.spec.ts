import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAssignmentComponent } from './take-assignment.component';

describe('TakeAssignmentComponent', () => {
  let component: TakeAssignmentComponent;
  let fixture: ComponentFixture<TakeAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
