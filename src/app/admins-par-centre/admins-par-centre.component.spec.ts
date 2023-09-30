import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsParCentreComponent } from './admins-par-centre.component';

describe('AdminsParCentreComponent', () => {
  let component: AdminsParCentreComponent;
  let fixture: ComponentFixture<AdminsParCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsParCentreComponent]
    });
    fixture = TestBed.createComponent(AdminsParCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
