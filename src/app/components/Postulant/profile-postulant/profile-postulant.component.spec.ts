import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostulantComponent } from './profile-postulant.component';

describe('ProfilePostulantComponent', () => {
  let component: ProfilePostulantComponent;
  let fixture: ComponentFixture<ProfilePostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
