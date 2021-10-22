import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiationPostulantComponent } from './initiation-postulant.component';

describe('InitiationPostulantComponent', () => {
  let component: InitiationPostulantComponent;
  let fixture: ComponentFixture<InitiationPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiationPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiationPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
