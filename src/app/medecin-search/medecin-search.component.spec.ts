import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinSearchComponent } from './medecin-search.component';

describe('MedecinSearchComponent', () => {
  let component: MedecinSearchComponent;
  let fixture: ComponentFixture<MedecinSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinSearchComponent]
    });
    fixture = TestBed.createComponent(MedecinSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
