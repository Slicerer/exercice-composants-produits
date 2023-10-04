import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienDetailsComponent } from './lien-details.component';

describe('LienDetailsComponent', () => {
  let component: LienDetailsComponent;
  let fixture: ComponentFixture<LienDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LienDetailsComponent]
    });
    fixture = TestBed.createComponent(LienDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
