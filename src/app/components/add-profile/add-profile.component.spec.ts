import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfileComponent } from './add-profile.component';

describe('AddProfileComponent', () => {
  let component: AddProfileComponent;
  let fixture: ComponentFixture<AddProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProfileComponent]
    });
    fixture = TestBed.createComponent(AddProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
