import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProfileComponent } from './single-profile.component';

describe('SingleProfileComponent', () => {
  let component: SingleProfileComponent;
  let fixture: ComponentFixture<SingleProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleProfileComponent]
    });
    fixture = TestBed.createComponent(SingleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
