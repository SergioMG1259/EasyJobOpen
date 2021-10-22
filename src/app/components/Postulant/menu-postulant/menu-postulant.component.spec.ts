import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPostulantComponent } from './menu-postulant.component';

describe('MenuPostulantComponent', () => {
  let component: MenuPostulantComponent;
  let fixture: ComponentFixture<MenuPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
