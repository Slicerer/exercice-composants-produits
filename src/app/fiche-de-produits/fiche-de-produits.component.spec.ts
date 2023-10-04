import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDeProduitsComponent } from './fiche-de-produits.component';

describe('FicheDeProduitsComponent', () => {
  let component: FicheDeProduitsComponent;
  let fixture: ComponentFixture<FicheDeProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheDeProduitsComponent]
    });
    fixture = TestBed.createComponent(FicheDeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
