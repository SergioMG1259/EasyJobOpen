import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticantsPostulantComponent } from './practicants-postulant.component';

describe('PracticantsPostulantComponent', () => {
  let component: PracticantsPostulantComponent;
  let fixture: ComponentFixture<PracticantsPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticantsPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticantsPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
