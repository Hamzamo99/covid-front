import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesSuperAdminsComponent } from './liste-des-super-admins.component';

describe('ListeDesSuperAdminsComponent', () => {
  let component: ListeDesSuperAdminsComponent;
  let fixture: ComponentFixture<ListeDesSuperAdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesSuperAdminsComponent]
    });
    fixture = TestBed.createComponent(ListeDesSuperAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
