import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesCentresComponent } from './liste-des-centres.component';

describe('ListeDesCentresComponent', () => {
  let component: ListeDesCentresComponent;
  let fixture: ComponentFixture<ListeDesCentresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesCentresComponent]
    });
    fixture = TestBed.createComponent(ListeDesCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
