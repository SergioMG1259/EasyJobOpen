import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitProfilePostulantComponent } from './visit-profile-postulant.component';

describe('VisitProfilePostulantComponent', () => {
  let component: VisitProfilePostulantComponent;
  let fixture: ComponentFixture<VisitProfilePostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitProfilePostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitProfilePostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
