import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInscriptionsCentreComponent } from './liste-inscriptions-centre.component';

describe('ListeInscriptionsCentreComponent', () => {
  let component: ListeInscriptionsCentreComponent;
  let fixture: ComponentFixture<ListeInscriptionsCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeInscriptionsCentreComponent]
    });
    fixture = TestBed.createComponent(ListeInscriptionsCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
