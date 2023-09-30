import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedecinsComponent } from './admin-medecins.component';

describe('AdminMedecinsComponent', () => {
  let component: AdminMedecinsComponent;
  let fixture: ComponentFixture<AdminMedecinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMedecinsComponent]
    });
    fixture = TestBed.createComponent(AdminMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
