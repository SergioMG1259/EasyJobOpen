import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPostulantComponent } from './login-postulant.component';

describe('LoginPostulantComponent', () => {
  let component: LoginPostulantComponent;
  let fixture: ComponentFixture<LoginPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
