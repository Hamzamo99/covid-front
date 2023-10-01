import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsParCentreComponent } from './medecins-par-centre.component';

describe('MedecinsParCentreComponent', () => {
  let component: MedecinsParCentreComponent;
  let fixture: ComponentFixture<MedecinsParCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinsParCentreComponent]
    });
    fixture = TestBed.createComponent(MedecinsParCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
