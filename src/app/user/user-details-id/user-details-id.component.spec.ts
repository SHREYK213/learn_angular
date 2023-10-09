import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsIdComponent } from './user-details-id.component';

describe('UserDetailsIdComponent', () => {
  let component: UserDetailsIdComponent;
  let fixture: ComponentFixture<UserDetailsIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsIdComponent]
    });
    fixture = TestBed.createComponent(UserDetailsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
