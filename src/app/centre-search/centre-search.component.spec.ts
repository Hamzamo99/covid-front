import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreSearchComponent } from './centre-search.component';

describe('CentreSearchComponent', () => {
  let component: CentreSearchComponent;
  let fixture: ComponentFixture<CentreSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentreSearchComponent]
    });
    fixture = TestBed.createComponent(CentreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
