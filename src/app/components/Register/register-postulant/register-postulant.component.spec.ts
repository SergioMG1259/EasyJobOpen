import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPostulantComponent } from './register-postulant.component';

describe('RegisterPostulantComponent', () => {
  let component: RegisterPostulantComponent;
  let fixture: ComponentFixture<RegisterPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
