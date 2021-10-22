import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCompanyComponent } from './menu-company.component';

describe('MenuCompanyComponent', () => {
  let component: MenuCompanyComponent;
  let fixture: ComponentFixture<MenuCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
