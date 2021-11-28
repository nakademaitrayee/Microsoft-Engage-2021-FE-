import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAllComponent } from './take-all.component';

describe('TakeAllComponent', () => {
  let component: TakeAllComponent;
  let fixture: ComponentFixture<TakeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
