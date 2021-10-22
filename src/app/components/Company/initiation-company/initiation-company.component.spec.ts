import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiationCompanyComponent } from './initiation-company.component';

describe('InitiationCompanyComponent', () => {
  let component: InitiationCompanyComponent;
  let fixture: ComponentFixture<InitiationCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiationCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiationCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
