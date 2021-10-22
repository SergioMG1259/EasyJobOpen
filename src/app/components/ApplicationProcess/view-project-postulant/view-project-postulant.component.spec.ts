import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectPostulantComponent } from './view-project-postulant.component';

describe('ViewProjectPostulantComponent', () => {
  let component: ViewProjectPostulantComponent;
  let fixture: ComponentFixture<ViewProjectPostulantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProjectPostulantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
